# 快速上手

这篇文档将指引如何快手上手使用组件库。

### Vue 版本
建议使用 Vue.js >= `3.3.2`

### 安装
你可以从 `npm` 或 `yarn` 安装，注意，图标是一个独立的库，你需要单独安装才能使用它。
```Shell
# npm
npm i birdpaper-ui
npm i birdpaper-icon

# yarn
yarn add birdpaper-ui
yarn add birdpaper-icon
```

### 全量引入
```JS
import App from "./App.vue"

import BirdpaperUI from "birdpaper-ui"
import "birdpaper-ui/dist/index.css"

import BirdpaperIcon from "birdpaper-icon"

const app = createApp(App)
app.use(BirdpaperUI)
app.use(BirdpaperIcon)
app.mount("#app")
```

### 按需加载
进行中...

### CDN 引入
进行中...