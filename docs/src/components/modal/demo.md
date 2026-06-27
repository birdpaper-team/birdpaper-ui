## 基础用法

通过函数式调用 `Modal.info()` 等方法快速弹出对话框，适用于简单的确认、提示场景。

<demo-block src="modal/basic">

<<< @/example/modal/basic.vue

</demo-block>

## 对话框类型

通过函数式调用可快速弹出不同类型对话框：`info` - <b>信息</b>，`success` - <b>成功</b>，`warning` - <b>警告</b>，`error` - <b>错误</b>，`confirm` - <b>确认</b>。

<demo-block src="modal/type">

<<< @/example/modal/type.vue

</demo-block>

## 自定义底部

使用 `footer` 插槽自定义底部按钮区域，适用于需要自定义操作的场景。

<demo-block src="modal/footer">

<<< @/example/modal/footer.vue

</demo-block>

## 异步确认

通过 `on-before-ok` 回调实现异步确认，确认按钮会自动进入 loading 状态。返回 `true` 关闭对话框，返回 `false` 则保持打开。

<demo-block src="modal/async">

<<< @/example/modal/async.vue

</demo-block>

## 全屏

设置 `fullscreen` 属性使对话框全屏展示，适用于需要大面积内容展示的场景。

<demo-block src="modal/fullscreen">

<<< @/example/modal/fullscreen.vue

</demo-block>

## 自定义插槽

使用 `header` 插槽自定义头部区域，或使用默认插槽自定义内容区域。

<demo-block src="modal/custom">

<<< @/example/modal/custom.vue

</demo-block>
