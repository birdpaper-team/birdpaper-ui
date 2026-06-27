## 基础用法

通过 `Message.success()` 等方法直接调用，支持 5 种消息类型：`text` - <b>文本</b>，`success` - <b>成功</b>，`warning` - <b>警告</b>，`error` - <b>错误</b>，`loading` - <b>加载中</b>。

<demo-block src="message/basic">

<<< @/example/message/basic.vue

</demo-block>

## 消息类型

分别调用不同类型的方法展示对应的消息提示。

<demo-block src="message/type">

<<< @/example/message/type.vue

</demo-block>

## 简洁模式

设置 `plain: true` 使用简洁模式，消息样式更加轻量。

<demo-block src="message/plain">

<<< @/example/message/plain.vue

</demo-block>

## 自定义时长

通过 `duration` 属性控制消息持续时间（毫秒），设置为 `0` 则不会自动关闭，需配合 `closeable: true` 手动关闭。

<demo-block src="message/duration">

<<< @/example/message/duration.vue

</demo-block>

## 弹出位置

通过 `position` 属性设置消息弹出位置，支持 `top`（顶部，默认）和 `bottom`（底部）。

<demo-block src="message/position">

<<< @/example/message/position.vue

</demo-block>
