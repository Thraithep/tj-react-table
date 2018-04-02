const path = require('path');
const HtmlWebPackPlugin  = require('html-webpack-plugin');

module.exports = {
  entry: './docs/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    port: 9090,
    hot: true
  },
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:  {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use:{
          loader: "html-loader",
          options: { minimize: true }
        }
      }
    ],
  },
  plugins:[
    new HtmlWebPackPlugin ({
      title: 'test lib',
      template: path.join(__dirname,'./docs','index.html')
    })
  ]
};