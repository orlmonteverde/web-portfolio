const withCSS = require('@zeit/next-sass')
module.exports = withCSS({
  cssModules: true
})

module.exports = {
  ...module.exports,
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  }
}
