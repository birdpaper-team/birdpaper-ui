# 安装

## 环境要求

- **Node.js** >= 18
- **Vue** >= 3.5.0
- 推荐使用 **pnpm** 作为包管理器

## 使用包管理器安装

::: code-group

```sh [pnpm]
pnpm add birdpaper-ui
```

```sh [npm]
npm install birdpaper-ui
```

```sh [yarn]
yarn add birdpaper-ui
```

:::

## 完整引入

如果你不在乎打包体积，可以一次性引入所有组件和样式。

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

安装后可以直接在模板中使用所有组件：

```vue
<template>
  <bp-button type="primary">Hello Birdpaper</bp-button>
</template>
```

### 带全局配置引入

```ts
app.use(BirdpaperUI, {
  prefix: "Bp",        // 组件前缀，默认 "Bp"
  namespace: "bp",     // CSS 命名空间，默认 "bp"
  locale: "zh-CN",     // 语言，默认 "zh-CN"
  size: "default",     // 全局尺寸，默认 "default"
  zIndex: 2000,        // 弹出层基准层级，默认 2000
  emptyText: "暂无数据" // 空状态文案
});
```

详见 [全局配置](/components/config/)。

## 按需引入

如果对打包体积有要求，可以按需引入单个组件。需要配合构建工具的 tree-shaking 使用。

### 基本用法

```vue
<script setup lang="ts">
import { Button, Input, Select } from "birdpaper-ui";
import "birdpaper-ui/theme/button.css";
import "birdpaper-ui/theme/input.css";
import "birdpaper-ui/theme/select.css";
</script>

<template>
  <bp-button>按钮</bp-button>
  <bp-input placeholder="请输入" />
</template>
```

### 从子包直接引入（更精确的 tree-shaking）

```ts
// 从 components 子包引入（推荐）
import Button from "@birdpaper-ui/components/button";
import Input from "@birdpaper-ui/components/input";
import Select from "@birdpaper-ui/components/select";
```

## 引入样式

### 全量引入

```ts
import "birdpaper-ui/theme/index.css";
```

### 按组件引入

```ts
import "birdpaper-ui/theme/button.css";
import "birdpaper-ui/theme/input.css";
```

### 通过 UnoCSS 引入（推荐）

项目已内置 UnoCSS 预设，安装后可直接使用原子化 CSS 工具类：

```ts
// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  // birdpaper-ui 已内置 UnoCSS reset
});
```

## TypeScript 支持

Birdpaper UI 完整导出 TypeScript 类型声明。`exports` 配置已包含 `types` 条件，现代构建工具（Vite、Nuxt 等）会自动识别。

如需手动声明全局组件类型：

```ts
// env.d.ts
/// <reference types="birdpaper-ui/global" />
```

这样在模板中使用组件时可获得完整的类型提示。

## 兼容性

| 环境 | 支持 |
|------|------|
| 现代浏览器（Chrome 87+, Firefox 78+, Safari 14+, Edge 88+） | ✅ |
| Node.js >= 18 | ✅ |
| Vue 3.5+ | ✅ |
| TypeScript 4.7+ | ✅ |
| SSR (Nuxt 3) | ✅ |

## 下一步

- [快速上手](/develop/start/) — 了解基本使用方式
- [全局配置](/components/config/) — 自定义组件前缀、尺寸、语言等
- [组件目录](/components/catalog/) — 浏览所有可用组件
