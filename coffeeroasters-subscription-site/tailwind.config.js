/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        custom: {
          grey: "#83888F",
          lightCream: "#FEFCF7",
          paleOrange: "#FDD6BA",
          darkGrey: "#333D4B",
          darkCyan: "#0E8784",
          lightCyan: "#66D2CF",
        },
      },
      fontFamily: {
        heading: "Fraunces, serif",
        sans: "Barlow, sans-serif",
      },
      backgroundImage: {
        hamburger: "url('./assets/shared/mobile/icon-hamburger.svg')",
        close: "url('./assets/shared/mobile/icon-close.svg')",
      },
    },
  },
  plugins: [],
};
