## 基础用法

点击触发元素后弹出确认气泡，支持确认和取消操作。

<demo-block src="popconfirm/basic">

<<< @/example/popconfirm/basic.vue

</demo-block>

## 类型

通过 `type` 属性设置确认框类型，影响图标和确认按钮样式。支持 `info`（默认）、`success`、`warning`、`error` 四种类型。

<demo-block src="popconfirm/type">

<<< @/example/popconfirm/type.vue

</demo-block>

## 弹出位置

通过 `position` 属性设置气泡弹出位置，继承 Trigger 组件的所有位置参数。

<demo-block src="popconfirm/position">

<<< @/example/popconfirm/position.vue

</demo-block>

## 自定义按钮文字

通过 `ok-text` 和 `cancel-text` 属性自定义按钮文案，适用于不同业务场景。

<demo-block src="popconfirm/custom">

<<< @/example/popconfirm/custom.vue

</demo-block>

## 异步确认

通过 `on-before-ok` 回调实现异步确认，确认按钮会自动进入 loading 状态。返回 `true` 关闭气泡，返回 `false` 则保持打开。

<demo-block src="popconfirm/async">

<<< @/example/popconfirm/async.vue

</demo-block>
