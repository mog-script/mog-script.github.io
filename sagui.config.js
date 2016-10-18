/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  style: {
    cssModules: false
  },

  webpack: {
    preLoaders: [
      {
        test: /js/,
        loader: 'mog-script'
      }
    ]
  }
}
