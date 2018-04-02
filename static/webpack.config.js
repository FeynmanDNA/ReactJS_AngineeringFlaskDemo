const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: __dirname + '/js/index.jsx',
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};

module.exports = config;
