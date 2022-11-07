/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(({addUtilities}) => {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
    '.transform-preserve-3d': {
      'transform-style': 'preserve-3d'
    }
  })
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-arrow-right': 'bounce-arrow-right 2s infinite',
        'bounce-arrow-right-short': 'bounce-arrow-right-short 2s infinite',
      },
      keyframes: {
        'bounce-arrow-right': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(-10px)' },
          '60%': { transform: 'translateX(-7px)' }
        },
        'bounce-arrow-right-short': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(-5px)' },
          '60%': { transform: 'translateX(-2px)' }
        }
      }
    },
  },
  plugins: [backfaceVisibility],
}
