var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './public/assets-src/js/main'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'public')
    }]
  }
};