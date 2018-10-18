const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackConfig = require('./base.config.js')
const newPlugins = baseWebpackConfig.plugins.concat([new UglifyJsPlugin()])

module.exports = Object.assign({},
  baseWebpackConfig,
  {
    plugins: newPlugins
  })
