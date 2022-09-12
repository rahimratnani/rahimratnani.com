const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
        theme: {
          light: '#FFFFFF',
          dark: colors.zinc[900],
        },
        font: {
          light: colors.zinc[300],
          dark: colors.zinc[900],
        },
        primary: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li::marker': {
              color: theme('colors.primary'),
            },
            color: theme('colors.font.dark'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            'h2,h3,h4': {
              color: theme('colors.font.dark'),
            },
            strong: { color: theme('colors.font.dark') },
            '[class~="lead"]': {
              color: theme('colors.zinc[600]'),
            },
          },
        },
        invert: {
          css: {
            'ul > li::marker': {
              color: theme('colors.primary'),
            },
            color: theme('colors.font.light'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              blockquote: {
                borderLeftColor: theme('colors.zinc.700'),
                color: theme('colors.zinc.300'),
              },
            },
            'h2,h3,h4': {
              color: theme('colors.font.light'),
            },
            hr: { borderColor: theme('colors.zinc.700') },
            strong: { color: theme('colors.font.light') },
            '[class~="lead"]': {
              color: theme('colors.zinc[400]'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
