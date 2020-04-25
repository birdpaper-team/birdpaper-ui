# 小纸鹤 UI 框架（birdpaperUI）

## npm 安装

我推荐你使用 npm 的安装方式，以便在项目中结合 webpack 打包

``` javascript
npm i birdpaper-ui // npm
yarn add birdpaper-ui // yarn
```
## 引入 birdpaper-ui
你不仅可以完整的引入整个包，还可以根据实际使用需求，进行按需加载部分组件。

### 完整引入
在`main.js`中写入：

``` javascript
// 引入所有组件
import birdpaperUI from 'birdpaper-ui'
Vue.use(birdpaperUI)
```
或者引入`lib`目录下的脚本
``` javascript
// lib 包方式引入
import birdpaperUI from 'birdpaper-ui/lib/birdpaper-ui.common.js'
Vue.use(birdpaperUI)
```

### 按需加载
使用`babel-plugin-component`可以只引入部分组件，从而减少打包体积。

在使用前，你需要安装此插件：
```
npm install babel-plugin-component -D
```

然后，在项目根目录新建或修改`.babelrc`文件，修改以下内容：
```
{
    "plugins": [
        [
            "component",
            {
                "libraryName": "birdpaper-ui",
                "libDir": "packages",
                "style": false
            }
        ]
    ]
}
```

接下来，你就可以根据业务需要引入部分组件

例如：你只需要引入`Button`和`Input`组件，则在`main.js`中写入：
```
import { bpButton, bpInput } from "birdpaper-ui"
Vue.use(bpButton)
Vue.use(bpInput)
// 或
Vue.component(bpButton.name, bpButton);
Vue.component(bpButton.name, bpButton);
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
