const path = require('path');

module.exports = {
  entry: './doc/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};