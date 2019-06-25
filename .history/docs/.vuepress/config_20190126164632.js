const path = require('path');

module.exports = {
  title: '网站标题',
  description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  serviceWorker: true,
  themeConfig: {
    sidebar: 'auto'
    nav:[
      { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }        
    ],
     // 为以下路由添加侧边栏
     sidebar:{
      '/baseComponents/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        }]
     }

  },
  
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
     
    }
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  }
};
