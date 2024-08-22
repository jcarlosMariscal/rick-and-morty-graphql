const { violet, blackA, mauve, green } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
      },
      animation: {
        favorite: "favorite 1s linear infinite",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
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
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
