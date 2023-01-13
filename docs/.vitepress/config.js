const nav = [
  { text: '🍏 Daily', link: '../daily/index' },
  { 
    text: '🍓 Layouts', 
    items: [
      { text: 'Flexbox', link: '../layouts/flex/index' },
      { text: 'Grid', link: '../layouts/grid/index' },
      { text: '响应式布局', link: '../layouts/responsive/index' },
    ]
  },
  { text: '🥥 CSS工具', link: '../tools/index' },
]

const sidebar_tools = {
  '/tools/': [
    {
      text: '🍒 CSS工具',
      items: [
        { text: '工具索引', link: '/tools/index' },
        { text: 'box-shadow生成', link: '/tools/shadow' },
        { text: 'Gradients颜色渐变', link: '/tools/gradients' },
        { text: '组件Snippets', link: '/tools/components' },
        { text: 'Curves形状', link: '/tools/curves' },
      ]
    }
  ],
}
const sidebar_layouts = {
  '/layouts/flex': [
    { 
      text: 'Flexbox布局',
      items: [
        { text: '资源', link: '/layouts/flex/index' },
      ]
    },
  ],
  '/layouts/grid': [
    { 
      text: 'Grid布局',
      items: [
        { text: '资源', link: '/layouts/grid/index' },
        { text: '实战', link: '/layouts/grid/action' },
      ]
    },
  ],
  '/layouts/responsive': [
    {
      text: '响应式布局',
      items: [
        { text: '教程', link: '/layout/responsive/index' }
      ]
    }
  ],
}


const sidebar = {
  ...sidebar_layouts,
  ...sidebar_tools,
}

export default {
  title: 'Awesome CSS',
  description: 'CSS is Cool🍍 🥥',
  lastUpdated: true,
  base: '/awesome-css/', // 非常重要这个属性！！！
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-css/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    outlineTitle: '目录',
    outline: [2, 3],
    editLink: {
      text: '在GitHub编辑此页',
      pattern: 'https://github.com/jamessawyer/awesome-css/edit/main/docs/:path'
    },
    nav,
    sidebar
  },
  markdown: {
    // lineNumbers: true, // 是否显示行号
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2, 3] },
  }
}
