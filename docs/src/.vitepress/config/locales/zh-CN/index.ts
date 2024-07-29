import { nav } from "./nav";
import { sidebar } from "./sidebar";

export default {
  label: "简体中文",
  lang: "zh-CN",
  title: "小纸鹤-BirdpaperUI",
  titleTemplate: "基于Vue3的UI组件库",
  description: "基于Vue3的UI组件库",
  themeConfig: {
    nav: nav,
    outlineTitle: "大纲",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    sidebar: sidebar,
  },
};
