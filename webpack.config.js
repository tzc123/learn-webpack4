const path = require('path')
const appPath = path.join(__dirname, 'src/app.js')
const outputPath = path.join(__dirname, 'dist')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
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
    new BundleAnalyzerPlugin(),
    new CleanPlugin(outputPath),
    new HtmlPlugin({
      filename: 'index.html',
      title: 'test',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
        },
        vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
        }
      }
    })
  ]
}