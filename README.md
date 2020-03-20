# 小纸鹤 UI 框架（birdpaperUI）

## npm 安装
我推荐你使用 npm 的安装方式，以便在项目中结合 webpack 打包

```
npm i birdpaper-ui
```

### 使用，在 main.js 中写入

``` javascript
import birdpaperUI from 'birdpaper-ui/lib/birdpaper-ui.common.js'
import 'birdpaper-ui/lib/birdpaper-ui.css'
Vue.use(birdpaperUI)
```

## 源码构建

拉取源码

```
git clone https://gitee.com/liluanhui/birdpaper-ui
```

安装依赖
```
npm i
```

打包构建
```
npm run lib
```
将构建后的`lib`目录移动或者覆盖你项目`node_modules`中的`birdpaper-ui`即可。

## CDN 引入
暂未推出，敬请期待。