const config = require('./webpack.config.base');

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const nodeExternals = require("webpack-node-externals");

config.target = 'node';
config.node = {
    fs: 'empty'
};
config.externals = [
    nodeExternals({ modulesDir: path.join(__dirname, "/node_modules") })
];

module.exports = config;
