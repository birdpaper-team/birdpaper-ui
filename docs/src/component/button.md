<script setup lang="ts">
  import props from "../example/button/props.ts";
  import events from "../example/button/events.ts";
</script>

# 按钮 Button

通过点击发起一个命令或操作。

### 基础用法

按钮支持 5 中基础类型，分别是 `normal` - 常规（默认），`primary` - 主要，`plain` - 线框，`dashed` - 虚线，`text` - 文本。
<demo-block src="example/button/basic"></demo-block>

### 按钮尺寸

你可以根据不同使用场景选择合适尺寸的按钮，分别有 `large` - 大型，`normal` - 常规（默认），`small` - 小型，`mini` - 迷你。
<demo-block src="example/button/size"></demo-block>

### 按钮形状

通过 `shape` 属性控制 `square` - 矩形，`round` - 圆角，`circle` - 圆形等 3 个按钮形状。
<demo-block src="example/button/shape"></demo-block>

### 按钮状态

一共有 5 种按钮状态，它们通过`status` 属性控制，分别是`normal` - 普通，`primary` - 主要，`success` - 成功，`warning` - 警告，`danger` - 危险。
<demo-block src="example/button/status"></demo-block>

### 图标按钮

通过 `icon` 属性可以设置按钮图标，结合恰当的按钮状态，更明确表达按钮的用意。
<demo-block src="example/button/icon"></demo-block>

### 禁用状态

通过 `disabled` 属性控制按钮的禁用状态。
<demo-block src="example/button/disabled"></demo-block>

### 按钮加载

通过 `loading` 属性控制按钮的加载状态。
<demo-block src="example/button/loading"></demo-block>

### Button 属性

<table-block type="props" :data="props"></table-block>

### Button 事件

<table-block type="events" :data="events"></table-block>
