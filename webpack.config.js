const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    background: './src/background',
    content: './src/content',
    options: './src/options'
  },
  output: {
    path: path.join(__dirname, 'extension'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
