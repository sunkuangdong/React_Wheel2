const path = require('path')
module.exports = {
  // 程序的入口在哪里
  entry: {
    index: './lib/index.tsx'
  },
  // 支持多种文件
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // 配置出口
  output: {
    // 出口路径
    path: path.resolve(__dirname, 'dist'),
    // 库的名字FUI
    library: 'FUI',
    // 库的格式
    // umd兼容了三种定义方式,commonJS define script
    // 但是并没有多NB,只是做了if else
    libraryTarget: 'umd',
  },
  // 编译tsx
  module: {
    rules: [{
      test: /\.tsx?$/,
      // 如果用了ts文件,使用下面loader翻译成js
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
}