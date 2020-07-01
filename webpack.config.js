const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
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
        }]
    },
    // 自动找到index.html文件并显示它
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    // 告诉webpack下面的库是外部的库
    externals: {
        react: {
            // 对应不同的打包工具
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            // 对应不同的打包工具
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
}