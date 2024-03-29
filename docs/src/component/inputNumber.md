<script setup lang="ts">
  import props from "../example/inputNumber/props.ts";
  import events from "../example/inputNumber/events.ts";
</script>

# 数字输入 InputNumber

提供针对数字输入的输入框

### 基础用法

一个基础输入框用法，通过 `v-model` 绑定数据值。
<demo-block src="example/inputNumber/basic" stack-blitz-name="inputnumber-basic"></demo-block>

### 控制精度和步长

在某些具体场景，你可能需要通过 `precision` 和 `step` 控制展示精度和操作增减的步长
<demo-block src="example/inputNumber/precision" stack-blitz-name="inputnumber-precision"></demo-block>

### InputNumber 属性

<table-block type="props" :data="props"></table-block>

### InputNumber 事件

<table-block type="events" :data="events"></table-block>
