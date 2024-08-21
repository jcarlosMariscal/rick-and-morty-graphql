/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        favorite: "favorite 1s linear infinite",
      },
      keyframes: {
        favorite: {
          "0%": { transform: "scale(1) rotate(0)" },
          "25%": {
            transform: "translate(.10rem, -.10rem) scale(.9)  rotate(90deg)",
          },
          "50%": {
            transform: "translate(-.10rem, .10rem) scale(.75) rotate(180deg)",
          },
          "75%": {
            transform: "translate(-.10rem, .10rem) scale(.9) rotate(270deg)",
          },
          "100%": { transform: "translate(0, 0) scale(1) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
