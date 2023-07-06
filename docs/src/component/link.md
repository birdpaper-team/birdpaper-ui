<script setup lang="ts">
  import props from "../example/link/props.ts";
  import events from "../example/link/events.ts";
</script>

# 链接 Link
用于路由跳转或者点按操作等场景

### 基础用法
链接组件的基本用法
<demo-block src="example/link/basic"></demo-block>

### 链接状态
一共有 5 种链接状态，它们通过`status` 属性控制，分别是`normal` - 普通，`primary` - 主要，`success` - 成功，`warning` - 警告，`danger` - 危险。
<demo-block src="example/link/status"></demo-block>

### 加载中
通过 `loading` 使链接处于加载状态
<demo-block src="example/link/loading"></demo-block>

### Link 属性

<table-block type="props" :data="props"></table-block>

### Link 事件

<table-block type="events" :data="events"></table-block>
