<p align="center">
  <a href="https://www.birdpaper.design">
    <img class="logo" src="https://birdpaper-1251999712.cos.ap-guangzhou.myqcloud.com/design/assets/bp%2Bvue.png" alt="Birdpaper UI" />
  </a>
</p>

<h1 align="center">Birdpaper UI</h1>

<p align="center">
  A Vue 3 component library for enterprise admin interfaces
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
  <a href="https://www.birdpaper.design/en/">Documentation</a> ·
  <a href="https://www.birdpaper.design">中文文档</a> ·
  <a href="https://icon.birdpaper.design">Icons</a> ·
  <a href="https://www.npmjs.com/package/birdpaper-ui">npm</a>
</p>

---

## Introduction

**Birdpaper UI** (v3 · Blue) is built for enterprise admin UIs. It ships a complete design system and high-quality Vue 3 components — simple, consistent, and efficient — so you can build trustworthy product interfaces faster.

## Features

- **Vue 3.5+** — Composition API with full TypeScript types
- **Design system** — Reusable tokens for color, type, radius, shadow, motion, and elevation
- **Dark mode** — Paired semantic colors + CSS variables; toggle with the `.dark` root class
- **Theming** — Override `--bp-primary-*`, `--bp-size-*`, and related variables to match your brand
- **On-demand import** — Tree-shakeable components and per-component styles
- **Bilingual docs** — [English](https://www.birdpaper.design/en/) / [中文](https://www.birdpaper.design)
- **Icons** — [birdpaper-icon](https://icon.birdpaper.design) (based on Remix Icon)

## Requirements

- **Node.js** >= 18
- **Vue** >= 3.5.0
- **pnpm** recommended

## Install

```bash
# pnpm
pnpm add birdpaper-ui

# npm
npm install birdpaper-ui

# yarn
yarn add birdpaper-ui
```

### Full import

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

### On-demand import

```vue
<script setup lang="ts">
import { Button } from "birdpaper-ui";
import "birdpaper-ui/theme/button.css";
</script>

<template>
  <Button status="primary">Button</Button>
</template>
```

See the docs for more: [Install](https://www.birdpaper.design/en/develop/install/) · [Quick Start](https://www.birdpaper.design/en/develop/start/)

## Components

| Category | Components |
|----------|------------|
| General | Button, Icon, Link, Space, Grid |
| Data Entry | Form, Input, Textarea, InputNumber, InputTag, Select, Radio, Checkbox, Switch, Rate, DatePicker, TimePicker, ColorPicker, VerifyCode |
| Data Display | Table, Tag, Badge, Avatar, Image, Statistic, Empty, Tooltip |
| Navigation | Pagination, Dropdown, Steps |
| Feedback | Alert, Message, Modal, Drawer, Popconfirm, Spin, Trigger |
| Other | ConfigProvider |

Full catalog: [Component Catalog](https://www.birdpaper.design/en/components/catalog/)

## Development

This repo is a **pnpm monorepo**:

```text
birdpaper-ui/
├── packages/
│   ├── birdpaper-ui/     # Published package entry
│   ├── components/       # Component source
│   ├── theme/            # Styles and design tokens
│   └── hooks/            # Shared hooks
├── docs/                 # VitePress documentation site
└── scripts/              # Build scripts
```

```bash
# Install dependencies
pnpm install

# Start the docs dev server (default http://localhost:7070)
pnpm docs:dev

# Build the component library
pnpm build

# Build the docs
pnpm docs:build

# Preview the docs build
pnpm docs:preview

# Unit tests
pnpm test
```

Contributing guides: [Contributing](https://www.birdpaper.design/en/develop/pr/) · [Local Development](https://www.birdpaper.design/en/develop/local-dev/)

Before opening a PR, sync the default branch and create a feature branch:

```bash
git pull
git checkout -b feat/your-topic
```

## Browser Support

Modern browsers and the latest two versions of Chromium, Firefox, Safari, and Edge. IE is not supported.

## Links

| | |
|---|---|
| Documentation | https://www.birdpaper.design/en/ |
| 中文文档 | https://www.birdpaper.design |
| npm | https://www.npmjs.com/package/birdpaper-ui |
| Icons | https://icon.birdpaper.design |
| Changelog | https://www.birdpaper.design/en/develop/changelog/ |
| v2 Docs | https://v2.birdpaper.design |

## License

[MIT](./LICENSE) © 2021-PRESENT birdpaper-ui
