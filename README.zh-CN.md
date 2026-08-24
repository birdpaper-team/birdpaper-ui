<p align="center">
  <a href="https://www.birdpaper.design">
    <img class="logo" src="https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/assets/bp%2Bvue.png" alt="Birdpaper UI" />
  </a>
</p>

<h1 align="center">Birdpaper UI</h1>

<p align="center">
  为企业中后台而生的 Vue 3 组件库
</p>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.zh-CN.md">中文</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/birdpaper-ui"><img src="https://img.shields.io/npm/v/birdpaper-ui.svg?style=badge" alt="npm version" /></a>
  <a href="https://npmcharts.com/compare/birdpaper-ui?minimal=true"><img src="https://img.shields.io/npm/dm/birdpaper-ui.svg?style=badge" alt="npm downloads" /></a>
  <a href="https://www.birdpaper.design"><img src="https://img.shields.io/badge/Vue-3.5+-42b883?style=badge" alt="Vue 3.5+" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Ready-3178c6?style=badge" alt="TypeScript" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-red.svg?style=badge" alt="MIT License" /></a>
</p>

<p align="center">
  <a href="https://www.birdpaper.design/en/">English Docs</a> ·
  <a href="https://www.birdpaper.design">中文文档</a> ·
  <a href="https://icon.birdpaper.design">图标</a> ·
  <a href="https://www.npmjs.com/package/birdpaper-ui">npm</a>
</p>

---

## 简介

**Birdpaper UI**（v3 · Blue）面向企业级中后台场景，提供完整设计体系与高质量 Vue 3 组件。简洁、一致、高效，帮助你更快构建可信赖的产品界面。

## 特性

- **Vue 3.5+** — Composition API、完整 TypeScript 类型
- **设计体系** — 色彩、字号、圆角、阴影、动效与层级 Token 可复用
- **深色模式** — 双套语义色 + CSS Variables，根节点切换 `.dark` 即可
- **主题定制** — 覆盖 `--bp-primary-*`、`--bp-size-*` 等变量适配品牌
- **按需引入** — 支持 Tree-shaking，可单独引入组件与对应样式
- **中英双语文档** — [English](https://www.birdpaper.design/en/) / [中文](https://www.birdpaper.design)
- **配套图标** — [birdpaper-icon](https://icon.birdpaper.design)（基于 Remix Icon）

## 环境要求

- **Node.js** >= 18
- **Vue** >= 3.5.0
- 推荐使用 **pnpm**

## 安装

```bash
# pnpm
pnpm add birdpaper-ui

# npm
npm install birdpaper-ui

# yarn
yarn add birdpaper-ui
```

### 完整引入

```ts
// main.ts
import { createApp } from "vue";
import BirdpaperUI from "birdpaper-ui";
import "birdpaper-ui/theme/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(BirdpaperUI);
app.mount("#app");
```

```vue
<template>
  <bp-button status="primary">Hello Birdpaper</bp-button>
</template>
```

### 按需引入

```vue
<script setup lang="ts">
import { Button } from "birdpaper-ui";
import "birdpaper-ui/theme/button.css";
</script>

<template>
  <Button status="primary">Button</Button>
</template>
```

更多用法见文档：[安装](https://www.birdpaper.design/develop/install/) · [快速上手](https://www.birdpaper.design/develop/start/)

## 组件一览

| 分类 | 组件 |
|------|------|
| 通用 | Button、Icon、Link、Space、Grid |
| 数据录入 | Form、Input、Textarea、InputNumber、InputTag、Select、Radio、Checkbox、Switch、Rate、DatePicker、TimePicker、ColorPicker、VerifyCode |
| 数据展示 | Table、Tag、Badge、Avatar、Image、Statistic、Empty、Tooltip |
| 导航 | Pagination、Dropdown、Steps |
| 反馈 | Alert、Message、Modal、Drawer、Popconfirm、Spin、Trigger |
| 其他 | ConfigProvider |

完整目录：[组件总览](https://www.birdpaper.design/components/catalog/)

## 本地开发

本仓库为 **pnpm monorepo**：

```text
birdpaper-ui/
├── packages/
│   ├── birdpaper-ui/     # 发布包入口
│   ├── components/       # 组件源码
│   ├── theme/            # 样式与设计 Token
│   └── hooks/            # 公共 hooks
├── docs/                 # VitePress 文档站
└── scripts/              # 构建脚本
```

```bash
# 安装依赖
pnpm install

# 启动文档开发服务（默认 http://localhost:7070）
pnpm docs:dev

# 构建组件库
pnpm build

# 构建文档
pnpm docs:build

# 预览文档产物
pnpm docs:preview

# 单元测试
pnpm test
```

贡献指南：[参与贡献](https://www.birdpaper.design/develop/pr/) · [本地开发](https://www.birdpaper.design/develop/local-dev/)

提交 PR 前请先同步默认分支并新建功能分支：

```bash
git pull
git checkout -b feat/your-topic
```

## 浏览器支持

支持现代浏览器与最新两个版本的 Chromium / Firefox / Safari / Edge。不支持 IE。

## 链接

| | |
|---|---|
| English Docs | https://www.birdpaper.design/en/ |
| 中文文档 | https://www.birdpaper.design |
| npm | https://www.npmjs.com/package/birdpaper-ui |
| 图标库 | https://icon.birdpaper.design |
| 更新日志 | https://www.birdpaper.design/develop/changelog/ |
| v2 文档 | https://v2.birdpaper.design |

## License

[MIT](./LICENSE) © 2021-PRESENT birdpaper-ui
