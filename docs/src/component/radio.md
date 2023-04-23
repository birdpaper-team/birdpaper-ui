<script setup lang="ts">
  import props from "../example/radio/props.ts";
  import events from "../example/radio/events.ts";
</script>

# 单选框 Radio

选择一组互斥数据中的某一个选项

### 基础用法

基础单选框的使用方式。
<demo-block src="example/radio/basic"></demo-block>

### 选项禁用

通过 `disabled` 属性控制不可选状态
<demo-block src="example/radio/disabled"></demo-block>

### Radio 属性

<table-block type="props" :data="props"></table-block>

### Radio 事件

<table-block type="events" :data="events"></table-block>
