const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBase = require('./base');

const webpackDev = webpackBase({
  mode: 'development',
  entry: [
    path.join(process.cwd(), 'src/main.js')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
});

module.exports = webpackDev;
