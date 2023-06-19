import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

export function DarkModeButton() {
  const { isDark, setIsDark } = useTheme();
  
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
