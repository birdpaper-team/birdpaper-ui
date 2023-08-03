/** Banner 数据 */
export const bannerInfo = {
  name: "BirdpaperUI",
  intro_cn: `一个通用的 <span style="color:#059669">Vue3</span> 组件库`,
  intro_en: `<span class="text-en"> A common UI component library for Vue3.</span>`,
  btn_text: {
    start: "快速上手",
    git: "在 Github 上查看",
  },
  version: "",
};

/** 快捷入口 */
export const quickEntryList = [
  {
    title: "指南",
    icon: "ri-compass-3-line",
    intro: "查看操作指南，帮助更快速的上手组件库的安装和使用，更高效的搭建易用、美观的页面。",
    action: {
      btnName: "查看详情",
      link: "/guide/easystart",
      disabled: false,
    },
  },
  {
    title: "组件",
    icon: "ri-shape-line",
    intro: "组件参考文档，了解并预览组件的使用方式、API、事件和方法等。",
    action: {
      btnName: "查看详情",
      link: "/component/grid",
      disabled: false,
    },
  },
  {
    title: "设计资源",
    icon: "ri-palette-line",
    intro: "查看或下载相关设计资源，帮助设计师快速输出页面视觉效果，提高团队协作效率。",
    action: {
      btnName: "稍晚推出",
      link: "",
      disabled: true,
    },
  },
  {
    title: "更新日志",
    icon: "ri-file-list-3-line",
    intro: "查看历史版本记录，了解功能新增、优化、Bug 修复和产品计划等信息。",
    action: {
      btnName: "稍晚推出",
      link: "",
      disabled: true,
    },
  },
];
