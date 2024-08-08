export const nav = [
  {
    text: "设计",
    items: [
      { text: "简介", link: "/design/introduction" },
      { text: "色彩", link: "/design/color" },
      { text: "设计原则", link: "/design/principle" },
      { text: "样式指南", link: "/design/guide" },
      { text: "深色模式", link: "/design/dark" },
      {
        text: "资源",
        items: [
          { text: "Icons 图标库", link: "https://icon.birdpaper.design" },
          { text: "MasterGo web组件库", link: "/" },
        ],
      },
    ],
  },
  {
    text: "开发",
    items: [
      {
        items: [
          { text: "安装", link: "/develop/install" },
          { text: "快速上手", link: "/develop/start" },
          { text: "定制主题", link: "/develop/theme" },
        ],
      },
      {
        text: "版本",
        items: [
          { text: "v2", link: "https://v2.birdpaper.design" },
          { text: "版本发布", link: "/develop/publish" },
          { text: "更新日志", link: "/develop/changelog" },
        ],
      },
      {
        text: "指南",
        items: [
          { text: "本地开发", link: "/develop/local-dev" },
          { text: "参与贡献", link: "/develop/pr" },
        ],
      },
    ],
  },
  {
    text: "组件",
    items: [
      { text: "组件目录", link: "/components/catalog" },
      { text: "全局配置", link: "/components/config" },
    ],
  },
  { text: "赞助", link: "/donate" },
];
