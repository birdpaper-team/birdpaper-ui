<p align="center">
  <a href="https://www.birdpaper.design">
    <img class="logo" src="https://birdpaper-1251999712.file.myqcloud.com/design/assets/birdpaperui%2Bvue3-min.png"/>
  </a>
</p>

<p align="center">birdpaper-ui 是一个提供基于 Vue3 的 UI 组件库</p>

<p align="center">
  <a href="https://gitee.com/liluanhui/birdpaper-ui.git" target="_blank">
    <img class="tag" src="https://gitee.com/liluanhui/birdpaper-ui/badge/star.svg?theme=dark">
  </a>
  <a href="https://www.npmjs.com/package/birdpaper-ui" target="_blank">
     <img class="tag" src="https://img.shields.io/npm/v/birdpaper-ui.svg?style=badge"/>
  </a>
  <a href="https://npmcharts.com/compare/birdpaper-ui?minimal=true">
    <img class="tag" src="http://img.shields.io/npm/dm/birdpaper-ui.svg"/>
  </a>
   <a href="https://ui.birdpaper.com">
    <img class="tag" src="https://img.shields.io/badge/platform-web-61B5FF.svg"/>
  </a>
   <a href="https://ui.birdpaper.com">
    <img class="tag" src="https://img.shields.io/badge/license-MIT-red.svg"/>
  </a>
</p>

[English](./README.md) | 简体中文

<h2>版本</h2>

- 最新：<img class="li-img" src="https://img.shields.io/npm/v/birdpaper-ui.svg?style=badge"/>

更多的版本信息，请参阅 [更新日志](https://www.birdpaper.design/components/version_c) 以及 [版本规范](https://www.birdpaper.design/design/version_m)

## 特性

- 🛠 提供个人维护的 Vue3 组件
- 🎉 基于 Vue3 的 Composition API
- 🐬 中规中矩的交互和视觉风格

## 使用 npm 或 yarn

推荐使用 npm 或 yarn 的安装方式，以便更好的与打包工具结合。

```bash
$ npm i birdpaper-ui -S
$ yarn add birdpaper-ui
```

如果网络不怎么样，推荐使用 cnpm

## 引入 birdpaper-ui

你不仅可以完整的引入整个包，还可以根据实际使用需求，进行按需加载部分组件。

在`main.js`中写入：

```javascript
import birdpaperUI from "birdpaper-ui/packages";
import "birdpaper-ui/packages/style/index.less";

const app = createApp(App)
app.use(birdpaperUI).mount("#app")
```

## 文档&社区

由于这是作者个人开发并维护的项目，通常文档会存在不完善、体验差等诸多缺点，这些将会在未来的迭代中修复和改进，还请你给予一些谅解。未来小纸鹤还将发布自有的技术社区，将会提供一个友好的平台去支撑项目的成长，等着瞧~

目前，你可以在 [小纸鹤设计官网](https://www.birdpaper.design) 中获取更多的组件、API 文档，也可以在 [语雀](https://www.yuque.com/birdpaper.design) 上反馈问题和关注最新动态。

> 如果你在使用中遇到 Bug 或者让你不爽的，可以通过 [Gitee Issue](https://gitee.com/liluanhui/birdpaper-ui/issues/new) 或 [Github Issue](https://gitee.com/liluanhui/birdpaper-ui/issues/new) 进行反馈。

## 相关链接

- [组件文档](https://www.birdpaper.design/components/install_m)
- [Gitee 地址](https://gitee.com/liluanhui/birdpaper-ui)
- [Github 地址](https://github.com/liluanhui/birdpaper-ui)
- [Npm 地址](https://www.npmjs.com/package/birdpaper-ui)
- [语雀](https://www.yuque.com/birdpaper.design)
- [Vue](https://v3.cn.vuejs.org)

## 捐赠

birdpaper-ui 采用 MIT 开源许可协议，是由个人开发并维护的项目，你可以免费的使用它，同时也接受捐赠的形式去更好的支持项目的发展；如果你是个人用户，可以通过捐赠的形式支持项目成长，你的捐赠记录和昵称也会得到公开展示；如果你是企业或组织的经营者，那么你的捐赠将具有商业意义。

[捐赠地址](https://www.birdpaper.design/donate)
