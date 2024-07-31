import { nav } from "./nav";
import { sidebar } from "./sidebar";

export default {
  label: "简体中文",
  lang: "zh-CN",
  title: "Birdpaper UI",
  titleTemplate: '一个 Vue UI 组件库',
  description: "一个基于 Vue 的 UI 组件库",
  themeConfig: {
    nav: nav,
    outlineTitle: "大纲",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    sidebar: sidebar,
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
};
