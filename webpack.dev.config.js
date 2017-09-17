const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./webpack.config.js');
const appConfig = require('./src/config.json');

config.devtool = 'inline-source-map';
config.output.publicPath = 'http://localhost:'+ appConfig.devPort + appConfig.baseUrl;

config.plugins.push(new DashboardPlugin());

config.devServer = {
  contentBase: './dist',
  port: appConfig.devPort,
};

module.exports = config;
