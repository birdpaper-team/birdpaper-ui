## 基础用法

通过 `v-model` 绑定标签数组，输入后回车添加标签，点击关闭按钮或按 Backspace 删除。

<demo-block src="inputTag/basic">

<<< @/example/inputTag/basic.vue

</demo-block>

## 标签折叠

通过 `max-tag-count` 属性限制最多显示的标签数量，超出部分显示为 `+N...`。

<demo-block src="inputTag/max">

<<< @/example/inputTag/max.vue

</demo-block>

## 禁用

通过 `disabled` 属性禁用输入，已有的标签仍会显示但不可删除。

<demo-block src="inputTag/status">

<<< @/example/inputTag/status.vue

</demo-block>
