import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const wasDark = JSON.parse(window.localStorage.getItem("theme"));
    wasDark ? setIsDark(true) : setIsDark(false);

    wasDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  return { isDark, setIsDark };
}
