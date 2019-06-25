const path = require('path');

module.exports = {
  title: 'THI',
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
