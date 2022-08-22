/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-theme': {
          0: 'rgb(245, 245, 245)',
        },
        'dark-theme': {
          0: 'rgb(29, 30, 32)',
        },
      },
    },
  },
  plugins: [],
};
