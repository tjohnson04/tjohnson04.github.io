/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.{html,js}",
    "./assets/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: 'rgb(3 7 18)',
        },
      },
    },
  },
  plugins: [],
}
