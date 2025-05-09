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
        'darker-color': 'var(--bg-darker-color)',
      },
      boxShadow: {
        'white-md': '0 4px 6px rgba(255, 255, 255, 0.1)',
        'white-lg': '0 10px 15px rgba(255, 255, 255, 0.15)',
        'white-xl': '0 20px 25px rgba(255, 255, 255, 0.2)',
      },
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