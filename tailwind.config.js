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
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'bg-dark': 'var(--bg-dark-color)',
      }
    },
    screens: {
      sm: '640px',// celulares
      md: '768px',// tablets
      lg: '1025px',// laptops menores, iPad paisagem
      xl: '1426px',  // desktops grandes
      '2xl': '1536px'// monitores full HD+
    }
  },
  plugins: [
    require('tailwind-hamburgers'),
  ],
}