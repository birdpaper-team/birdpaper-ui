## 基础用法

通过默认插槽传入触发元素，`content` 插槽传入弹出内容。默认点击触发，弹出至底部。

<demo-block src="trigger/basic">

<<< @/example/trigger/basic.vue

</demo-block>

## 弹出位置

支持 12 种弹出位置：`top`、`bottom`、`left`、`right` 及其对齐变体 `top-left`、`top-right`、`bottom-left`、`bottom-right`、`upper-left`、`upper-right`、`low-left`、`low-right`。

<demo-block src="trigger/position">

<<< @/example/trigger/position.vue

</demo-block>

## 触发方式

通过 `trigger` 属性设置触发方式：`click`（默认）点击触发，`hover` 悬停触发。

<demo-block src="trigger/trigger-type">

<<< @/example/trigger/trigger-type.vue

</demo-block>

## 延迟触发

通过 `open-delay` 和 `close-delay` 属性设置悬停触发的延迟时间（毫秒），避免误触。

<demo-block src="trigger/delay">

<<< @/example/trigger/delay.vue

</demo-block>

## 箭头

设置 `show-arrow` 属性在弹出层显示指向触发元素的箭头。

<demo-block src="trigger/arrow">

<<< @/example/trigger/arrow.vue

</demo-block>

## 滚动跟随

设置 `update-at-scroll` 属性使弹出层在滚动时跟随更新位置，适用于在可滚动容器中使用。

<demo-block src="trigger/scroll">

<<< @/example/trigger/scroll.vue

</demo-block>
