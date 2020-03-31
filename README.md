# 小纸鹤 UI 框架（birdpaperUI）

## npm 安装

我推荐你使用 npm 的安装方式，以便在项目中结合 webpack 打包

``` javascript
npm i birdpaper-ui // npm
yarn add birdpaper-ui // yarn
```

### 使用，在 main.js 中写入

``` javascript
import birdpaperUI from 'birdpaper-ui/lib/birdpaper-ui.common.js'
import 'birdpaper-ui/lib/birdpaper-ui.css'
Vue.use(birdpaperUI)
```

## 源码构建

拉取源码

``` html
git clone https://gitee.com/liluanhui/birdpaper-ui
```

安装依赖

``` javascript
npm install
```

打包构建

``` javascript
npm run lib
```

将构建后的 `lib` 目录移动或者覆盖你项目 `node_modules` 中的 `birdpaper-ui` 即可。

## CDN 引入
在此之前，你必须先引入 Vue 框架，以官方提供的生产环境版本为例：
``` javascript
// 引入 Vue 框架
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
你可以通过 unpkg 获取并引入最新版本的资源
``` javascript
// 引入样式
<link rel="stylesheet" href="https://unpkg.com/birdpaper-ui@0.1.1/lib/birdpaper-ui.css">
// 引入组件
<script src="https://unpkg.com/birdpaper-ui@0.1.1/lib/birdpaper-ui.common.js"></script>
```

你也可以使用小纸鹤提供的 CDN 服务
``` html
https://cos.birdpaper.com/birdpaper-ui/v0.1.1/birdpaper-ui.css
https://cos.birdpaper.com/birdpaper-ui/v0.1.1/birdpaper-ui.common.js
```
