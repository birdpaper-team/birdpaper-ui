<script setup lang="ts">
  import props from "../example/input/props.ts";
  import events from "../example/input/events.ts";
</script>

# 输入框 Input
基础的文本输入控件。

### 基础用法

一个基础输入框用法，通过 `v-model` 绑定数据值。
<demo-block src="example/input/basic"></demo-block>

### 输入框尺寸

提供四种输入框尺寸以适应不同使用场景，分别是`mini` - 迷你，`small` - 小型，`normal` - 常规，`large` - 大型。
<demo-block src="example/input/size"></demo-block>

### 字数限制

在限定 `maxlength` 后，可以通过 `show-limit` 开启字数限制提示。
<demo-block src="example/input/limit"></demo-block>

### 密码输入

使输入框支持密码输入，且支持明文/匿文切换。
<demo-block src="example/input/password"></demo-block>

### Input 属性

<table-block type="props" :data="props"></table-block>

### Input 事件

<table-block type="events" :data="events"></table-block>
