const path = require('path');

module.exports = {
  title: 'MS Design',
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
