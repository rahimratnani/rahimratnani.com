const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-theme': {
          0: 'rgb(245, 245, 245)',
          1: 'rgb(30, 30, 30)',
          2: 'rgb(108, 108, 108)',
        },
        'dark-theme': {
          0: 'rgb(29, 30, 32)',
          1: 'rgb(218, 218, 219)',
          2: 'rgb(155, 156, 157)',
        },
        'highlight-light': 'rgba(255, 153, 79, 0.45)',
        'highlight-dark': 'rgba(255, 153, 79, 0.8)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
