const webpack = require("webpack")
const base = require('./webpack.config')
const path = require("path")
module.exports = Object.assign({}, base, {
    // 更改模式为生产模式
    mode: 'production',
    // 入口
    entry: {
        // 这些单独打包之后,没改变就不会打包
        react: ['react'],
        "react-router-dom": ["react-router-dom"],
        "react-dom": ["react-dom"]
    },
    output: {
        filename: 'dll/[name].dll.js',
        path: path.resolve(__dirname, "dist")
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
            path: path.resolve(__dirname, "dist", "dll/[name].manifest.json")
        })
    ]
})