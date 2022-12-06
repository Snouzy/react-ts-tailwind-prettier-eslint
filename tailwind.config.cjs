/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#505050",
        },  
        blue: {
          500: "#182D70"
        },
        turquoise: {
          
          200: "#86CEE4",
          500: "#01A6D8"
        }
      }
    },
  },
  plugins: [],
}
