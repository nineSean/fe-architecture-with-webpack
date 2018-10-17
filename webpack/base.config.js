const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    sale: './sale.js',
    list: './list.js'
  },
  watch: true,
  // context属性配置entry的上下文
  context: path.resolve(process.cwd(), 'src/app'),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
      filename: 'test.html',
      template: path.resolve(process.cwd(), 'src/base/webpack.template.html')
    })
  ],
}

