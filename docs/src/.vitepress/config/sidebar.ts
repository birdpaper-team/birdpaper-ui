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
        { text: "布局 <span>Layout</span>", link: "/component/grid" },
        { text: "间距 <span>Space</span>", link: "/component/space" },
        { text: "按钮 <span>Button</span>", link: "/component/button" },
      ],
    },
    {
      text: "数据输入",
      items: [
        { text: "输入框 <span>Input</span>", link: "/component/input" },
        { text: "文本域 <span>Textarea</span>", link: "/component/textarea" },
        { text: "单选框 <span>Radio</span>", link: "/component/radio" },
        { text: "复选框 <span>Checkbox</span>", link: "/component/checkbox" },
        { text: "选择器 <span>Select</span>", link: "/component/select" },
        { text: "开关 <span>Switch</span>", link: "/component/switch" },
      ],
    },
    {
      text: "展示",
      items: [
        { text: "分页 <span>Pagination</span>", link: "/component/pagination" },
        { text: "表格 <span>Table</span>", link: "/component/table" },
        { text: "标签 <span>Tag</span>", link: "/component/tag" },
        { text: "链接 <span>Link</span>", link: "/component/link" },
        { text: "图片 <span>Image</span>", link: "/component/image" },
        { text: "加载中 <span>Loading</span>", link: "/component/spin" },
        { text: "文字气泡 <span>Tooltip</span>", link: "/component/tooltip" },
      ],
    },
    {
      text: "反馈",
      items: [
        { text: "警告提示 <span>Alert</span>", link: "/component/alert" },
        { text: "消息提示 <span>Message</span>", link: "/component/message" },
        { text: "气泡确认 <span>Popconfirm</span>", link: "/component/popconfirm" },
        { text: "对话框 <span>Modal</span>", link: "/component/modal" },
        { text: "抽屉 <span>Drawer</span>", link: "/component/drawer" },
      ],
    },
  ],
};
