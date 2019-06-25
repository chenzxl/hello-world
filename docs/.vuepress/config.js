const path = require('path');

module.exports = {
  title: 'iFast-UI',
  description: '快应用UI组件库，简洁，易用，高效',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
  },
  serviceWorker: true,
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '文档', link: '/index/' },
      { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: '' },
          { text: 'stylus-converter', link: '' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/index/': [
        {
          title: 'css',
          collapsable:false,
          children: [
            'css/css',
          ]
        },
        {
          title: 'componets',
          collapsable: true,
          children: [
            'componets/icon',
            'componets/Radio',
            'componets/Checkbox',
            'componets/iSwitch',
            'componets/Carousel',
            'componets/grid',
            'base/test4',
          ]
        },
          {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
  },
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {}
  },
  postcss: [require('autoprefixer')],
  sass: { indentedSyntax: true },
  scss: {
      includePaths: ["./public/scss/index.scss", "./public/scss/_variable.scss"]
  },
  chainWebpack: (config, isServer) => {
    config.resolveLoader
        .modules
        .add(path.resolve(__dirname, './node_modules'));
    config.resolve.alias.set('@', path.resolve(__dirname, '../../src'));
  },
  configureWebpack: (config, isServer) => {
    console.log(config)
    if (!isServer) {
      // 修改客户端的 webpack 配置
     
    }
  },
};
