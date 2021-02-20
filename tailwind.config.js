module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      textColor: {
    'primary': '#ff5a5a',
    'warm-gray': '#9b9b9b',
    'warm-green': '#48b6a3'
      }
    },
    backgroundColor: theme => ({
      'greenish-teal': '#2ecc71',
      'warm-gray': '#9b9b9b'
    }),
    borderColor: theme => ({
    'primary': '#ff5a5a',
    })

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
