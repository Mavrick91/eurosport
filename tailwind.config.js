module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      card: '#141414',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
