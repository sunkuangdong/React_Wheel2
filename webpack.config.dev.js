const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        example: './example.tsx',
    },
    // 自动找到index.html文件并显示它
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html'
        })
    ],
})