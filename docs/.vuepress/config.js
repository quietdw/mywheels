module.exports = {
  title: 'AwesomeUI',
  description: 'amazing!',
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '文档',
        link: '/guide/'
      },
      {
        text: '交流',
        link: 'https://github.com/quietdw/mywheels'
      },
    ],
    sidebar: [{
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      }
    ]
  }
}