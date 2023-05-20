/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Asap', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

