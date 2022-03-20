const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  target: 'web',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.ejs'),
      isDevelopment: true,
    }),
  ],
  devServer: {
    port: 8080,
    hot: false,
    liveReload: false,
    historyApiFallback: true,
  },
};
