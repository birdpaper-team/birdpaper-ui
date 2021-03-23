<p align="left">
  <img src="https://img.shields.io/badge/Language-Javascript-379bff.svg">

  <img src="https://img.shields.io/badge/Platform-Vue3.x-58c05b.svg">

  <a href="https://gitee.com/liluanhui/birdpaper-ui.git" target="_blank">
    <img src="https://gitee.com/liluanhui/birdpaper-ui/badge/star.svg?theme=dark">
  </a>
  <a href="https://www.npmjs.com/package/birdpaper-ui" target="_blank">
     <img src="https://img.shields.io/npm/v/birdpaper-ui.svg?style=badge"  alt="最新版本号"/>
  </a>
</p>

# 小纸鹤 UI 框架（birdpaperUI）

文档会慢慢完善，理解万岁。
## npm 安装

我推荐你使用 npm 的安装方式，以便在项目中结合 webpack 打包

```javascript
npm i birdpaper-ui // npm
yarn add birdpaper-ui // yarn
```

### 使用，在 main.js 中写入

```javascript
import birdpaperUI from "birdpaper-ui";
import "birdpaper-ui/lib/birdpaper-ui.css";

const app = createApp(App)

app.use(birdpaperUI)
  .mount("#app");
```

## 源码构建

拉取源码

```html
git clone https://gitee.com/liluanhui/birdpaper-ui
```

安装依赖

```javascript
npm install
```