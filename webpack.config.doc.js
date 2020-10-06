const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
  mode: 'production',
  // 配置出口
  output: {
    // 出口路径
    path: path.resolve(__dirname, 'doc'),
  },
  // 入口
  entry: {
    example: "./example.tsx"
  },
  // 自动找到index.html文件并显示它
  plugins: [
    new HtmlWebpackPlugin({
      template: 'example.html',
      filename: 'index.html'
    })
  ],
})