// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    gray: colors.trueGray,
    indigo: colors.indigo,
    red: colors.rose,
    yellow: colors.amber
  },
  variants: {
    extend: {}
  },
  plugins: []
}
