/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-dark": "url('src/assets/bg-mobile-dark.jpg')",
        "bg-desktop-dark": "url('src/assets/bg-desktop-dark.jpg')",
      },
	  fontFamily: {
		sans: ['Josefin Sans']
	  }
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
