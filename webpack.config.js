var path = require('path');
var webpack = require('webpack');

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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};
