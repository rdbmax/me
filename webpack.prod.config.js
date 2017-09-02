const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.js');

config.plugins.push(new UglifyJSPlugin());

module.exports = config;
