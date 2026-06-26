## 基础用法

表单的基本用法，包含常见表单组件。

<demo-block src="form/basic">

<<< @/example/form/basic.vue

</demo-block>

## 表单校验

通过 `rules` 属性设置校验规则，调用 `validate()` 方法触发校验，`resetFields()` 重置字段值。

<demo-block src="form/validation">

<<< @/example/form/validation.vue

</demo-block>

## 标签位置

通过 `label-position` 属性设置标签位置，支持 `left`、`right`、`top` 三种。

<demo-block src="form/label-position">

<<< @/example/form/label-position.vue

</demo-block>

## 行内布局

通过 `layout="inline"` 设置行内表单，常用于搜索条件。

<demo-block src="form/inline">

<<< @/example/form/inline.vue

</demo-block>

## 重置与清除

通过 `resetFields()` 重置为初始值，`clearValidate()` 清除校验结果。

<demo-block src="form/reset">

<<< @/example/form/reset.vue

</demo-block>

## 自动校验与附加功能

通过 FormItem 的 `auto-validate` 属性在失焦时自动校验，`show-colon` 显示冒号，`width` 自定义标签宽度。

<demo-block src="form/auto-validate">

<<< @/example/form/auto-validate.vue

</demo-block>
