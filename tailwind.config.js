/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-color': 'var(--bg-dark-color)',
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
  ],
}