const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
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
      primary: colors.teal,
      success: colors.green,
      transparent: 'transparent',
      warning: colors.yellow,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
