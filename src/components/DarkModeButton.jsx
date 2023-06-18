import { useState, useEffect } from "react";

export function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const wasDark = JSON.parse(window.localStorage.getItem("theme"));
    wasDark ? setIsDark(true) : setIsDark(false);
    
    wasDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  const handleClick = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    window.localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-cyan-600 dark:bg-opacity-30 w-8 h-8 rounded-full hover:bg-opacity-80 dark:hover:bg-opacity-20 transition-all"
    >
      <i
        className={`fa-regular fa-${
          isDark ? "moon" : "sun"
        } text-white text-xl`}
      ></i>
    </button>
  );
}
