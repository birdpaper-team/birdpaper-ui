export const sidebar = {
  "/design/": [
    { text: "简介", link: "/design/introduction" },
    { text: "色彩", link: "/design/color" },
    { text: "设计原则", link: "/design/principle" },
    { text: "样式指南", link: "/design/guide" },
    { text: "深色模式", link: "/design/dark" },
    { text: "设计资源", link: "/design/resource" },
  ],
  "/develop/": [
    { text: "安装", link: "/develop/install" },
    { text: "快速上手", link: "/develop/start" },
    { text: "定制主题", link: "/develop/theme" },
    { text: "版本发布", link: "/develop/publish" },
    { text: "更新日志", link: "/develop/changelog" },
    { text: "本地开发", link: "/develop/local-dev" },
    { text: "参与贡献", link: "/develop/pr" },
  ],

  "/components/": [ {
    text: "开始",
    items: [
      { text: "目录", link: "/components/catalog" },
      { text: "全局配置", link: "/components/config" },
    ],
  },
    {
      text: "基础",
      items: [
        { text: "布局 <span>Layout</span>", link: "/components/grid" },
        { text: "间距 <span>Space</span>", link: "/components/space" },
        { text: "按钮 <span>Button</span>", link: "/components/button" },
        { text: "图标 <span>Icon</span>", link: "/components/icon" },
      ],
    },
    {
      text: "数据输入",
      items: [
        { text: "表单 <span>Form</span>", link: "/components/form" },
        { text: "输入框 <span>Input</span>", link: "/components/input" },
        { text: "文本域 <span>Textarea</span>", link: "/components/textarea" },
        { text: "单选框 <span>Radio</span>", link: "/components/radio" },
        { text: "复选框 <span>Checkbox</span>", link: "/components/checkbox" },
        { text: "开关 <span>Switch</span>", link: "/components/switch" },
        { text: "选择器 <span>Select</span>", link: "/components/select" },
        {
          text: "验证码 <span>VerifyCode</span>",
          link: "/components/verifyCode",
        },
        {
          text: "日期选择 <span>DatePicker</span>",
          link: "/components/datePicker",
        },
        {
          text: "时间选择 <span>TimePicker</span>",
          link: "/components/timePicker",
        },
        {
          text: "数字输入 <span>InputNumber</span>",
          link: "/components/inputNumber",
        },
      ],
    },
    {
      text: "展示",
      items: [
        { text: "头像 <span>Avatar</span>", link: "/components/avatar" },
        { text: "分页 <span>Pagination</span>", link: "/components/pagination" },
        { text: "表格 <span>Table</span>", link: "/components/table" },
        { text: "标签 <span>Tag</span>", link: "/components/tag" },
        { text: "链接 <span>Link</span>", link: "/components/link" },
        { text: "图片 <span>Image</span>", link: "/components/image" },
        { text: "空状态 <span>Empty</span>", link: "/components/empty" },
        { text: "加载中 <span>Spin</span>", link: "/components/spin" },
        { text: "文字气泡 <span>Tooltip</span>", link: "/components/tooltip" },
      ],
    },
    {
      text: "反馈",
      items: [
        { text: "警告提示 <span>Alert</span>", link: "/components/alert" },
        { text: "消息提示 <span>Message</span>", link: "/components/message" },
        {
          text: "气泡确认 <span>Popconfirm</span>",
          link: "/components/popconfirm",
        },
        { text: "对话框 <span>Modal</span>", link: "/components/modal" },
        { text: "抽屉 <span>Drawer</span>", link: "/components/drawer" },
        { text: "触发器 <span>Trigger</span>", link: "/components/trigger" },
      ],
    },
  ],
};
