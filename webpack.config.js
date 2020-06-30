module.exports = {
    // 程序的入口在哪里
    entry: {
        index: './lib/index.tsx'
    },
    // 编译tsx
    modules: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    }
}