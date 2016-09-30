var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
      modules: ['node_modules'],
      extensions: ['.vue', '.js']
  },
  resolveLoader: {
    root: 'node_modules',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //       warnings: false
    //     }
    //   })
  ]
}
