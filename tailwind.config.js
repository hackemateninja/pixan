const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./**/*.{js,ts,jsx,tsx,css,scss}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      back: colors.white,
      backStrong: colors.gray,
      backDark: colors.coolGray,
      backDarkStrong: colors.coolGray,
      color: colors.coolGray,
      error: colors.red,
      info: colors.blue,
      primary: colors.emerald,
      success: colors.green,
      transparent: 'transparent',
      warning: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
