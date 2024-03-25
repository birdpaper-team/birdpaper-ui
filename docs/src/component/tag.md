<script setup lang="ts">
  import props from "../example/tag/props.ts";
  import events from "../example/tag/events.ts";
  import slots from "../example/tag/slots.ts";
</script>

# 标签 Tag

展示简短信息，用于数据选择、分类。

### 基础用法

基础标签用法
<demo-block src="example/tag/basic" stack-blitz-name="tag-basic"></demo-block>

### 标签状态

一共有 5 种标签状态，它们通过`status` 属性控制，分别是`normal` - 普通，`primary` - 主要，`success` - 成功，`warning` - 警告，`danger` - 危险。
<demo-block src="example/tag/status" stack-blitz-name="tag-status"></demo-block>

### 可关闭

可通过 `closeable` 控制标签关闭
<demo-block src="example/tag/closeable" stack-blitz-name="tag-closeable"></demo-block>

### Tag 属性

<table-block type="props" :data="props"></table-block>

### Tag 事件

<table-block type="events" :data="events"></table-block>

### Tag 插槽

<table-block type="slots" :data="slots"></table-block>
