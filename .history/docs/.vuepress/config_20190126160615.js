const path = require('path');

module.exports = {
  // 为以下路由添加侧边栏
  sidebar: [
    {
      title: '入门',
      children: [
        '/install/',
        'get-started/',
      ]
    },
    {
      title: '组件',
      children: ['/components/button']
    }
  ],
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
