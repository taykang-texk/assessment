module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
      'sm': '430px',
      // => @media (min-width: 430px) { ... }

      'md': '1280px',
      // => @media (min-width: 1280px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
