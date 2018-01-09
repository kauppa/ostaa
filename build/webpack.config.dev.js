const config = require('./webpack.config.base');
const path = require('path');
const webpack = require('webpack');

config.devtool = '#eval-source-map';

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    })
]);

module.exports = config;