const path = require('path');

module.exports = {
  title: 'MS Design',
  plugins: [
   
  ],
  head: [
   
  ],
  locales: {
   
  },
  themeConfig: {
   
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
