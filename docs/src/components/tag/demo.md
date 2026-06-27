## 基础用法

通过 `status` 属性设置标签的状态，配合 `border` 属性显示边框。支持 5 种状态：`gray` - <b>灰度（默认）</b>，`primary` - <b>主要</b>，`success` - <b>成功</b>，`warning` - <b>警示</b>，`danger` - <b>危险</b>。

<demo-block src="tag/basic">

<<< @/example/tag/basic.vue

</demo-block>

## 无边框

默认不带边框，适合在紧凑的场景中使用。

<demo-block src="tag/no-border">

<<< @/example/tag/no-border.vue

</demo-block>

## 图标

通过 `icon` 属性为标签添加图标，增强信息的可视化表达。

<demo-block src="tag/icon">

<<< @/example/tag/icon.vue

</demo-block>

## 可关闭

设置 `closeable` 属性显示关闭按钮，点击时触发 `close` 事件。

<demo-block src="tag/closeable">

<<< @/example/tag/closeable.vue

</demo-block>
