## 单选与 label 属性

单选的基本用法，Option 支持通过 `label` 属性或插槽内容设置显示文本。

<demo-block src="select/single">

<<< @/example/select/single.vue

</demo-block>

## 多选

通过 `multiple` 属性开启多选，`max-tag-count` 控制最多显示的标签数量。

<demo-block src="select/multiple">

<<< @/example/select/multiple.vue

</demo-block>

## 选择器尺寸

通过 `size` 属性设置输入框的尺寸，支持 4 种尺寸，分别是 `mini` - <b>迷你</b>，`small` - <b>小型</b>，`default` - <b>普通（默认）</b>，`large` - <b>大型</b>。

<demo-block src="select/size">

<<< @/example/select/size.vue

</demo-block>

## 可清空值

通过设置 `clearable` 允许选择器清空值。

<demo-block src="select/clearable">

<<< @/example/select/clearable.vue

</demo-block>

## 禁用

通过 `disabled` 属性禁用整个选择器，Option 上的 `disabled` 可禁用单个选项。

<demo-block src="select/disabled">

<<< @/example/select/disabled.vue

</demo-block>
