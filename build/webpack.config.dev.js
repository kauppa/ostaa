var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: {
        ostaa: "./src/index.ts",
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/
            }
        ]
    },
    plugins: [
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib')
    },
    resolve: {
        extensions: [".ts", ".json", ".js"]
    }
}
