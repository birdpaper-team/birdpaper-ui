## 基础用法

通过 `status` 属性设置提示状态，支持 4 种类型：`info` - <b>信息（默认）</b>，`success` - <b>成功</b>，`warning` - <b>警告</b>，`danger` - <b>错误</b>。

<demo-block src="alert/basic">

<<< @/example/alert/basic.vue

</demo-block>

## 详细内容

通过 `content` 属性添加详细的描述文本，用于提供更丰富的提示信息。

<demo-block src="alert/content">

<<< @/example/alert/content.vue

</demo-block>

## 可关闭

设置 `show-close` 属性显示关闭按钮，点击后触发 `close` 事件并自动隐藏。

<demo-block src="alert/close">

<<< @/example/alert/close.vue

</demo-block>

## 图标

默认根据状态类型自动展示图标。可通过 `hide-icon` 隐藏图标，也可通过 `icon` 属性传入自定义图标。

<demo-block src="alert/icon">

<<< @/example/alert/icon.vue

</demo-block>
