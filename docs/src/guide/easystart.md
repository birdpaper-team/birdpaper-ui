# 快速上手

这篇文档将介绍如何使用 birdpaper-ui

### 安装
```shell
npm install birdpaper-ui
```

### 引入 birdpaper-ui

你不仅可以完整的引入整个包，还可以根据实际使用需求，进行按需加载部分组件。

在`main.js`中写入：

```javascript
import BirdpaperUI from "birdpaper-ui"
import "birdpaper-ui/dist/index.css"

const app = createApp(App)
app.use(BirdpaperUI).mount("#app")
```

### 按需加载
后面将会更新这一块的文档...