/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5357B6",
        custom: {
          gray: {
            100: "#F5F6FA",
            200: "#E9EBF0",
            700: "#67727E"
          },
          blue: {
            800: "#334253",
            500: "#5357B6",
            200: "#C5C6EF"
          },
          red: {
            500: "#ED6368",
            200: "#FFB8BB"
          }
        }
      }
    },
  },
  plugins: [],
}

