var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './web/build'),
    filename: 'app.js'
  }
};
