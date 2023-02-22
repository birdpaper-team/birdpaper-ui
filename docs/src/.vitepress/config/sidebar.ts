/**
 * @ Author: Sam
 * @ Create Time: 2023-02-21 21:05:39
 * @ Modified by: Sam
 * @ Modified time: 2023-02-23 05:46:10
 * @ Description: 侧边导航
 */

export const sidebar = {
  "/guide/": [
    {
      text: "指南",
      items: [
        { text: "介绍", link: "/guide/introduce" },
        { text: "更新日志", link: "/guide/changelog" },
        { text: "安装", link: "/guide/install" },
        { text: "快速上手", link: "/guide/easystart" },
      ],
    },
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
        { text: "布局", link: "/component/layout" },
        { text: "间距", link: "/component/space" },
        { text: "按钮", link: "/component/button" },
      ],
    },
  ],
};
