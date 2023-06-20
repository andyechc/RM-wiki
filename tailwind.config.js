/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        show: "show 1s ease-in-out",
        rotate: "rotate 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
