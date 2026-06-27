## 基础用法

通过 `placement` 属性设置抽屉弹出方向，支持 `right`（默认）、`left`、`up`、`down` 四个方向。

<demo-block src="drawer/basic">

<<< @/example/drawer/basic.vue

</demo-block>

## 弹出方向

分别从四个方向打开抽屉，左右方向通过 `width` 控制宽度，上下方向通过 `height` 控制高度。

<demo-block src="drawer/placement">

<<< @/example/drawer/placement.vue

</demo-block>

## 自定义插槽

使用 `header`、`footer` 和默认插槽自定义抽屉的头部、底部和内容区域。

<demo-block src="drawer/custom">

<<< @/example/drawer/custom.vue

</demo-block>

## 异步确认

通过 `on-before-ok` 回调实现异步确认，确认按钮会自动进入 loading 状态。返回 `true` 关闭抽屉，返回 `false` 则保持打开。

<demo-block src="drawer/async">

<<< @/example/drawer/async.vue

</demo-block>
