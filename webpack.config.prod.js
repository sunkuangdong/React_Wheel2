const webpack = require("webpack")
const base = require('./webpack.config')
const path = require("path")
module.exports = Object.assign({}, base, {
    // 更改模式为生产模式
    mode: 'production',
    entry: {
        vendor: ['react-dom', 'react', 'react-router']
    },
    // 告诉webpack下面的库是外部的库
    externals: {
        // 下面这个两个不打包
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.resolve(__dirname, "dist", "manifest.json")
        })
    ]
})