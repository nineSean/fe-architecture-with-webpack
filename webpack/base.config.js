const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // context字段指定webpack编译的上下文
  context: path.resolve(process.cwd(), 'src/app'),
  // 浏览器生成源码以方便调试
  devtool: 'source-map',
  resolve: {
    // 文件后缀查询
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  entry: {
    sale: './sale.js',
    list: './list.js'
  },
  output: {
    // 所有静态资源以此路径为基准
    // 所有打包资源的更新目录
    publicPath: '/dist',
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // 提取出css文件
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        loader: "file-loader",
        options: {
          name: 'assets/[name]_[sha512:hash:base64:7].[ext]'
        }
      },
    ]
  },
  plugins: [
    // 提取出的css文件放到css文件夹
    new ExtractTextPlugin("./css/[name].css"),
    // 创建HTML标签，并且插入相关外部资源标签，如JS、CSS等
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'sale.html',
      template: '../base/webpack.template.html',
      chunks: ['sale'],
      inject: true
    })
  ],
}

