const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    // 更改模式为生产模式
    mode: 'production',
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
    }
})