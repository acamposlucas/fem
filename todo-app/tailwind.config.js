/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "mobile-dark": "url('/src/assets/bg-mobile-dark.jpg')",
        "desktop-dark": "url('/src/assets/bg-desktop-dark.jpg')",
        "mobile-light": "url('/src/assets/bg-mobile-light.jpg')",
        "desktop-light": "url('/src/assets/bg-desktop-light.jpg')"
      },
      fontFamily: {
        sans: ["Josefin Sans"],
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
