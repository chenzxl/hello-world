const path = require('path');

module.exports = {
  title: 'iFast',
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
