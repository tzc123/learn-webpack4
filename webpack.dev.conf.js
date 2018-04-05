// https://segmentfault.com/a/1190000007914129
const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const appPath = path.join(__dirname, 'src/app.js')
const outputPath = path.join(__dirname, 'dist')

module.exports = {
  // source-map 将打包后的代码和打包前的做一个映射，方便调试
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: {
    app: appPath
  },
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react', 'stage-0']
          }
        }
      }
    ]
  },
  plugins: [
    // 热加载, 服务于webpack-dev-server的hot配置
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      title: 'test',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
  ],
  // webpack-dev-server 的配置
  devServer: {
		historyApiFallback: true,
		inline: true,
		hot: true,
		port: 8080
  },
  // 注释了试试，webpack会建议每个js文件大小不要超过250kb,但开发环境因为包含了sourcemap并且代码未压缩所以一般都会超过这个大小, 可以在开发环境把这个warning关闭
  performance: {
    hints: false
  }
}