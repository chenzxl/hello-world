const path = require('path');

module.exports = {
  title: 'MS Design',
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '发现新内容可用',
            buttonText: '刷新'
          },
          '/en/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      }
    ],
    [
      '@vuepress/google-analytics', {
        ga: 'UA-89371431-5'
      }
    ],
    ['@vuepress/back-to-top']
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
