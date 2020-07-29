const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'production',
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
})