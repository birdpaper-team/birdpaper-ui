/*
 * @Author: Sam
 * @Date: 2023-02-17 15:34:06
 * @Last Modified by: Sam
 * @Last Modified time: 2023-02-17 15:54:30
 */

import { nav } from "./nav";
import { sidebar } from "./sidebar";
import demoblock from "../../../components/code-demo/src/index";

const config: import("vitepress").UserConfig = {
  title: "BirdpaperUI",
  titleTemplate: "基于Vue3的 UI组件库",
  description: "基于Vue3的 UI组件库",
  lastUpdated: false,
  themeConfig: {
    nav,
    logo: "/birdpaper-logo.svg",
    siteTitle: "BirdpaperUI",
    outlineTitle: "大纲",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/liluanhui/birdpaper-ui" }],
    sidebar,
  },
  markdown: {
    config: md => {
      md.use(demoblock);
    },
  },
};

export default config;
