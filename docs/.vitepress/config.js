const nav = [
  { 
    text: '🍓 Layouts', 
    items: [
      { text: 'Flexbox', link: '../layouts/flex/index' },
      { text: 'Grid', link: '../layouts/grid/index' },
    ]
  },
  { text: '🥥 CSS工具', link: '../tools/index' },
  // {
  //   text: '🪄 插件',
  //   items: [
  //     { text: 'ScrollTrigger', link: '../plugins/scroll-trigger/index' },
  //     { text: 'Draggable', link: '../plugins/draggable/index' },
  //     { text: 'Observer', link: '../plugins/observer/index' },
  //   ]
  // },
  // {
  //   text: '📒 Blogs',
  //   items: [
  //     { text: 'React❤️‍🔥GSAP', link: '../blogs/react/index' },
  //   ]
  // },
]

const sidebar_tools = {
  '/tools/': [
    {
      text: '🍒 CSS工具',
      items: [
        { text: '工具索引', link: '/tools/index' },
        { text: 'box-shadow生成', link: '/tools/shadow' },
      ]
    }
  ],
}
const sidebar_layouts = {
  '/layouts/flex': [
    { 
      text: 'Flexbox布局',
      items: [
        { text: '资源', link: '/layout/flex/index' },
      ]
    },
  ],
  '/layouts/grid': [
    { 
      text: 'Grid布局',
      items: [
        { text: '资源', link: '/layout/grid/index' },
      ]
    },
  ]
}


const sidebar_v3 = {
  '/v3/utility': [
    { 
      text: '工具方法(gsap.utils.xxx)',
      items: [
        { text: 'checkPrefix', link: '/v3/utility/checkPrefix' },
        { text: '⚡ clamp', link: '/v3/utility/clamp' },
        { text: 'distribute', link: '/v3/utility/distribute' },
        { text: 'getUnit', link: '/v3/utility/getUnit' },
      ]
    },
  ],
  
}
const sidebar_plugins = {
  '/plugins/scroll-trigger': [
    { 
      text: 'ScrollTrigger',
      items: [
        {
          text: '插件介绍',
          link: '/plugins/scroll-trigger/index',
        },
      ]
    },
    {
      text: '插件属性',
      collapsible: true,
      items: [
        { text: '.animation', link: '/plugins/scroll-trigger/properties/animation' },
        { text: '.direction', link: '/plugins/scroll-trigger/properties/direction' },
        { text: '.end', link: '/plugins/scroll-trigger/properties/end' },
        { text: '.isActive', link: '/plugins/scroll-trigger/properties/isActive' },
        { text: 'ScrollTrigger.isTouch', link: '/plugins/scroll-trigger/properties/static-isTouch' },
        { text: '.pin', link: '/plugins/scroll-trigger/properties/pin' },
        { text: '.progress', link: '/plugins/scroll-trigger/properties/progress' },
        { text: '.scrollor', link: '/plugins/scroll-trigger/properties/scrollor' },
        { text: '.start', link: '/plugins/scroll-trigger/properties/start' },
        { text: '.trigger', link: '/plugins/scroll-trigger/properties/trigger' },
        { text: '.vars', link: '/plugins/scroll-trigger/properties/vars' },
      ]
    },
    {
      text: '插件方法',
      collapsible: true,
      items: [
        { text: 'ScrollTrigger.addEventListener', link: '/plugins/scroll-trigger/methods/static-addEventListener' },
        { text: 'ScrollTrigger.removeEventListener', link: '/plugins/scroll-trigger/methods/static-removeEventListener' },
        { text: 'ScrollTrigger.refresh', link: '/plugins/scroll-trigger/methods/static-refresh' },
      ]
    },
  ],
  '/plugins/draggable': [
    { 
      text: 'Draggable',
      items: [
        {
          text: '插件介绍',
          link: '/plugins/draggable/index',
        },
      ]
    },
    {
      text: '插件属性',
      collapsible: true,
      items: [
        { text: '.autoScroll', link: '/plugins/draggable/properties/autoScroll' },
        { text: '.deltaX', link: '/plugins/draggable/properties/deltaX' },
        { text: '.deltaY', link: '/plugins/draggable/properties/deltaY' },
      ]
    },
    {
      text: '插件方法',
      collapsible: true,
      items: [
        { text: '.addEventListener', link: '/plugins/draggable/methods/addEventListener' },
        { text: '⚡Draggble.hitTest', link: '/plugins/draggable/methods/static-hitTest' },
      ]
    },
  ],
  '/plugins/observer': [
    { 
      text: 'Observer',
      items: [
        {
          text: '插件介绍',
          link: '/plugins/observer/index',
        },
      ]
    },
    {
      text: '插件属性',
      collapsible: true,
      items: [
        { text: '.deltaX', link: '/plugins/observer/properties/deltaX' },
        { text: '.deltaY', link: '/plugins/observer/properties/deltaY' },
      ]
    },
    {
      text: '插件方法',
      collapsible: true,
      items: [
        { text: 'Observer.create', link: '/plugins/observer/methods/static-create' },
      ]
    },
  ],
}

const sidebar = {
  ...sidebar_layouts,
  ...sidebar_tools,
  // ...sidebar_plugins,
  // ...sidebar_blogs,
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
