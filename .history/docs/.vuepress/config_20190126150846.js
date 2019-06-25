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
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '基于微软设计语言的Vue组件库'
    },
    '/en/': {
      lang: 'en-US',
      description: 'Vue components that implement Microsoft Design Language'
    }
  },
  themeConfig: {
   
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
