const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true
})

module.exports = {
  ...module.exports,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}
