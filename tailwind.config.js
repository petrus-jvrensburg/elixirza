/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Asap', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#3F0B59"
      }
    },
  },
  plugins: [],
}
