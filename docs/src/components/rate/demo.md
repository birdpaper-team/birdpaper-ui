## 基础用法

通过 `v-model` 绑定评分值，默认 5 颗星。

<demo-block src="rate/basic">

<<< @/example/rate/basic.vue

</demo-block>

## 半星评分

通过 `half` 属性开启半星评分，鼠标移动到星星左半部分为半星，右半部分为整星。

<demo-block src="rate/half">

<<< @/example/rate/half.vue

</demo-block>

## 自定义总数

通过 `count` 属性设置星星总数。

<demo-block src="rate/count">

<<< @/example/rate/count.vue

</demo-block>

## 自定义图标

通过 `icon` 插槽自定义评分图标，插槽参数 `{ index }` 为当前图标索引。

<demo-block src="rate/icon">

<<< @/example/rate/icon.vue

</demo-block>

## 只读与禁用

通过 `readonly` 属性设置只读状态，`disabled` 属性设置禁用状态。

<demo-block src="rate/status">

<<< @/example/rate/status.vue

</demo-block>
