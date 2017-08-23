const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./webpack.config.js');

config.devtool = 'inline-source-map';

config.plugins.push(new DashboardPlugin());

config.devServer = {
  contentBase: './dist',
};

module.exports = config;
