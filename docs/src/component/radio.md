<script setup lang="ts">
  import props from "../example/radio/props.ts";
  import groupProps from "../example/radio/group-props.ts";
  import events from "../example/radio/events.ts";
  import groupEvents from "../example/radio/group-events.ts";
</script>

# 单选框 Radio

选择一组互斥数据中的某一个选项

### 基础用法

基础单选框的使用方式。
<demo-block src="example/radio/basic" stack-blitz-name="radio-basic"></demo-block>

### 单选框组

通过外层包裹 `radio-group` 实现选项组
<demo-block src="example/radio/group" stack-blitz-name="radio-group"></demo-block>

### Radio 属性

<table-block type="props" :data="props"></table-block>

### Radio 事件

<table-block type="events" :data="events"></table-block>

### RadioGroup 属性

<table-block type="props" :data="groupProps"></table-block>

### RadioGroup 事件

<table-block type="props" :data="groupEvents"></table-block>