## 尺寸与图标

通过 `size` 属性设置头像尺寸，支持 `mini`、`small`、`default`、`large`，默认插槽放置图标或文字。

<demo-block src="avatar/basic">

<<< @/example/avatar/basic.vue

</demo-block>

## 文字头像

使用文字作为头像内容，组件会自动缩放字体以适配容器。

<demo-block src="avatar/text">

<<< @/example/avatar/text.vue

</demo-block>

## 形状

通过 `shape` 属性设置形状，支持 `circle`（默认）和 `square`。

<demo-block src="avatar/shape">

<<< @/example/avatar/shape.vue

</demo-block>

## 图片头像

通过 `image-url` 属性设置图片地址，`object-fit` 控制图片填充方式。

<demo-block src="avatar/image">

<<< @/example/avatar/image.vue

</demo-block>

## 自定义尺寸

`size` 支持传入数字（像素值）自定义尺寸。

<demo-block src="avatar/custom-size">

<<< @/example/avatar/custom-size.vue

</demo-block>
