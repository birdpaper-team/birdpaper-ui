## 基础用法

通过 `v-model` 绑定数值，支持动态切换。

<demo-block src="statistic/basic">

<<< @/example/statistic/basic.vue

</demo-block>

## 小数精度

通过 `precision` 属性设置小数位数，自动四舍五入并补零。

<demo-block src="statistic/precision">

<<< @/example/statistic/precision.vue

</demo-block>

## 千分位分隔

通过 `show-separator` 属性开启千分位分隔，`separator` 自定义分隔符。

<demo-block src="statistic/separator">

<<< @/example/statistic/separator.vue

</demo-block>

## 单位与前缀

通过 `unit` 属性设置单位，`prefix` 插槽自定义前缀内容。

<demo-block src="statistic/unit">

<<< @/example/statistic/unit.vue

</demo-block>

## 动画效果

通过 `animation` 属性开启动画，`duration` 控制动画时长，`value-from` 设置起始值。

<demo-block src="statistic/animation">

<<< @/example/statistic/animation.vue

</demo-block>

## 颜色与字号

通过 `color` 属性自定义颜色，`font-size` 支持字符串或数组（分别设置整数和小数字号）。

<demo-block src="statistic/style">

<<< @/example/statistic/style.vue

</demo-block>

## 占位文本

当数值为 `undefined` 或 `null` 时显示占位文本，通过 `placeholder` 属性自定义。

<demo-block src="statistic/placeholder">

<<< @/example/statistic/placeholder.vue

</demo-block>
