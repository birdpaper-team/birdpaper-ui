
import { nav } from "./nav";

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
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ]
  },
};

export default config;
