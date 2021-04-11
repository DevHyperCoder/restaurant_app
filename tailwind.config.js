module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryorange: "#FF3900",
        primaryblue: "#274768",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
