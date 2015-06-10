var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-maps',
  entry: {
    'boardgame-app': './src/index.js',
    'food-app': './src/food.js'
  },
  output: {
    path: path.resolve(__dirname, './web/build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/, loader: ExtractTextPlugin.extract(
          'style',
          'css!autoprefixer!sass'
        )
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
