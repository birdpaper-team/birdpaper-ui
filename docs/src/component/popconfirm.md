<script setup lang="ts">
  import props from "../example/popconfirm/props.ts";
  import events from "../example/popconfirm/events.ts";
</script>
# 气泡确认 Popconfirm
在元素附近弹出气泡确认框进行交互

### 基础用法

基础的气泡确认框
<demo-block src="example/popconfirm/basic"></demo-block>

### 异步关闭
通过 `on-before-ok` 控制确认框的异步关闭功能
<demo-block src="example/popconfirm/asyncClose"></demo-block>

### Popconfirm 属性

<table-block type="props" :data="props"></table-block>

### Popconfirm 事件

<table-block type="events" :data="events"></table-block>
