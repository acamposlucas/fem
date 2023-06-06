/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Space Grotesk"],
      },
      colors: {
        custom: {
          black: "#151515",
          darkGrey: "#242424",
          green: "#4EE1A0",
          grey: "#D9D9D9",
          red: "#FF6F5B",
        },
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require("prettier-plugin-tailwindcss"),
  ],
};
