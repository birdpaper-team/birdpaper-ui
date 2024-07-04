<script setup lang="ts">
  import props from "../example/datePicker/props.ts";
  import events from "../example/datePicker/events.ts";
</script>

# 日期选择 DatePicker

选择某一特定年份、月份，以及日期。

### 基础用法

配合 `v-mdoel` 实现日期选择
<demo-block src="example/datePicker/basic" stack-blitz-name="datepicker-basic"></demo-block>

### 带时间的选择器

通过增加属性 `show-time` 实现日期时间选择
<demo-block src="example/datePicker/show-time" stack-blitz-name="datepicker-show-time"></demo-block>

### 仅面板

通过 `hide-trigger` 属性可以控制组件只展示选择面板
<demo-block src="example/datePicker/only-panel" stack-blitz-name="datepicker-only-panel"></demo-block>

### DatePicker 属性

<table-block type="props" :data="props"></table-block>

### DatePicker 事件

<table-block type="events" :data="events"></table-block>