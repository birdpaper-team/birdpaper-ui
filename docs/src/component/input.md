<script setup lang="ts">
  // TODO:文档待完善
  import props from "../example/input/props.ts";
  import events from "../example/input/events.ts";
</script>

# 输入框 Input

### 基础用法
<demo-block src="example/input/basic"></demo-block>

### 输入框尺寸
<demo-block src="example/input/size"></demo-block>

### 字数限制
<demo-block src="example/input/limit"></demo-block>


### Input 属性
<table-block type="props" :data="props"></table-block>

### Input 事件
<table-block type="events" :data="events"></table-block>