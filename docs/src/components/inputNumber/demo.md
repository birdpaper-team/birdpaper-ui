## 基础用法

通过 `v-model` 绑定数值，支持步进按钮和手动输入。

<demo-block src="inputNumber/basic">

<<< @/example/inputNumber/basic.vue

</demo-block>

## 步进与范围

通过 `step` 设置步进值，`min` 和 `max` 限制范围。

<demo-block src="inputNumber/step">

<<< @/example/inputNumber/step.vue

</demo-block>

## 小数精度

通过 `precision` 属性设置保留的小数位数。

<demo-block src="inputNumber/precision">

<<< @/example/inputNumber/precision.vue

</demo-block>

## 单位与隐藏按钮

通过 `unit` 属性添加单位，`hide-button` 隐藏步进按钮。

<demo-block src="inputNumber/unit">

<<< @/example/inputNumber/unit.vue

</demo-block>

## 尺寸

通过 `size` 属性设置尺寸，支持 `mini`、`small`、`default`、`large`。

<demo-block src="inputNumber/size">

<<< @/example/inputNumber/size.vue

</demo-block>

## 禁用与只读

通过 `disabled` 属性禁用，`readonly` 属性设为只读。

<demo-block src="inputNumber/status">

<<< @/example/inputNumber/status.vue

</demo-block>
