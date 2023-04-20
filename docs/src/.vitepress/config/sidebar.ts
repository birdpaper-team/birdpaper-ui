export const sidebar = {
  "/guide/": [
    // {
    //   text: "指南",
    //   items: [
    //     { text: "介绍", link: "/guide/introduce" },
    //     { text: "更新日志", link: "/guide/changelog" },
    //     { text: "安装", link: "/guide/install" },
    //     { text: "快速上手", link: "/guide/easystart" },
    //   ],
    // },
    {
      text: "设计",
      items: [
        { text: "颜色", link: "/guide/color" },
        { text: "图标", link: "/guide/icon" },
      ],
    },
  ],

  "/component/": [
    {
      text: "基础",
      items: [
        { text: "布局", link: "/component/grid" },
        { text: "间距", link: "/component/space" },
        { text: "按钮", link: "/component/button" },
      ],
    },
    {
      text: "数据输入",
      items: [
        { text: "输入框", link: "/component/input" },
        { text: "文本域", link: "/component/textarea" },
        { text: "单选框", link: "/component/radio" },
      ],
    },
    {
      text: "反馈",
      items: [
        { text: "消息提示", link: "/component/message" },
      ],
    },
  ],
};
