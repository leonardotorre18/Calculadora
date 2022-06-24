const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
 return {
        // mode: 'development',
    entry: './src/index',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    },
    devtool: 'source-map',
    devServer: {
      port: 1000,
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      })
    ]
  }
}