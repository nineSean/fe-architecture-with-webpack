const path = require('path')
const baseWebpackConfig = require('./base.config.js')
const devWebpackPartialConfig = {
  watch: true,
  // webpack-dev-server读取该配置
  devServer: {
    // 服务器启动目录
    contentBase: path.join(process.cwd(), 'sample'),
    compress: true,
    port: 3000
  },
}

module.exports = Object.assign({},
  baseWebpackConfig,
  devWebpackPartialConfig)
