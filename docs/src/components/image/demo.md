## 基础用法

通过 `src` 属性设置图片地址，支持 `width` 和 `height` 控制尺寸。

<demo-block src="image/basic">

<<< @/example/image/basic.vue

</demo-block>

## 填充方式

通过 `fit` 属性设置图片的填充方式，与 CSS 的 `object-fit` 属性一致。支持 5 种方式：`fill` - <b>拉伸填充（默认）</b>，`contain` - <b>等比缩放包含</b>，`cover` - <b>等比缩放覆盖</b>，`none` - <b>原始尺寸</b>，`scale-down` - <b>取较小值</b>。

<demo-block src="image/fit">

<<< @/example/image/fit.vue

</demo-block>

## 加载失败

通过 `fallback` 属性设置加载失败时的兜底图片。也可以使用 `error` 插槽自定义错误展示内容。

<demo-block src="image/fallback">

<<< @/example/image/fallback.vue

</demo-block>

## 加载动画

通过 `load-effect` 属性设置图片加载完成时的动画效果。支持 3 种效果：`fade` - <b>渐显（默认）</b>，`blur` - <b>模糊过渡</b>，`none` - <b>无动画</b>。

<demo-block src="image/effect">

<<< @/example/image/effect.vue

</demo-block>
