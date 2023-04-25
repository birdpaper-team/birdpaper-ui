<script setup lang="ts">
  import props from "../example/alert/props.ts";
  import events from "../example/alert/events.ts";
</script>

# 警告提示 Alert
用于向用户展示警告提示以及其他重要信息

### 基础用法
基础的警告提示使用方式。
<demo-block src="example/alert/basic"></demo-block>

### 提示类型
提供 4 种不同类型以供不同场景使用，分别是`info` - 提示，`success` - 成功，`warning` - 警告，`error` - 错误。
<demo-block src="example/alert/type"></demo-block>

### 提示标题
可以通过 `title` 属性设置提示信息的标题。
<demo-block src="example/alert/title"></demo-block>

### 可关闭
可通过 `closeable` 属性控制是否支持手动关闭选项。
<demo-block src="example/alert/closeable"></demo-block>

### Alert 属性

<table-block type="props" :data="props"></table-block>

### Alert 事件

<table-block type="events" :data="events"></table-block>
