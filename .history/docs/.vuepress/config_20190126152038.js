const path = require('path');

module.exports = {
  title: 'iFast',
  head: [
    [
      'link', {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    [
      'link', {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  ],
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
