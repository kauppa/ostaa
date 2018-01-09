const path = require('path');
const webpack = require('webpack');

const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        'ostaa': "./src/index.ts"
    },
    externals: {
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib'),
        libraryTarget: 'umd',
        library: 'coorg',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/,
                options: {}
            }]
    },
    resolve: {
        extensions: [".ts", ".json", ".js"]
    },
    plugins: []
}
