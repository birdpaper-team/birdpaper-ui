## 基础用法

独立使用 Spin 组件展示加载状态，可通过 `description` 属性添加加载描述文本。

<demo-block src="spin/basic">

<<< @/example/spin/basic.vue

</demo-block>

## 包裹内容

将内容作为默认插槽传入，Spin 会在内容上方显示加载遮罩。通过 `spinning` 属性控制加载状态。

<demo-block src="spin/container">

<<< @/example/spin/container.vue

</demo-block>
