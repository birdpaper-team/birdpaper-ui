export const sidebar = {
  "/design/": [
    { text: "简介", link: "/design/introduction" },
    { text: "价值观", link: "/design/values" },
    { text: "设计原则", link: "/design/philosophy" },
  ],
  "/guide/": [
    {
      text: "指南",
      items: [
        { text: "快速上手", link: "/guide/easystart" },
        { text: "更新日志", link: "/guide/changelog" },
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
        { text: "复选框", link: "/component/checkbox" },
        { text: "选择器", link: "/component/select" },
        { text: "开关", link: "/component/switch" },
      ],
    },
    {
      text: "展示",
      items: [
        { text: "分页", link: "/component/pagination" },
        { text: "表格", link: "/component/table" },
        { text: "标签", link: "/component/tag" },
        { text: "链接", link: "/component/link" },
        { text: "加载中", link: "/component/spin" },
      ],
    },
    {
      text: "反馈",
      items: [
        { text: "警告提示", link: "/component/alert" },
        { text: "消息提示", link: "/component/message" },
        { text: "对话框", link: "/component/modal" },
      ],
    },
  ],
};
