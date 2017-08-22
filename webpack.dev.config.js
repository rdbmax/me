const config = require('./webpack.config.js');

config.devtool = 'inline-source-map';

config.devServer = {
  contentBase: './dist',
};

module.exports = config;
