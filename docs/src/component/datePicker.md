<script setup lang="ts">
  import props from "../example/datepicker/props.ts";
  import events from "../example/datepicker/events.ts";
</script>

# 日期选择 DatePicker

选择某一特定年份、月份，以及日期。

### 基础用法

配合 `v-mdoel` 实现日期选择
<demo-block src="example/datePicker/basic"></demo-block>

### 仅面板

通过 `hide-trigger` 属性可以控制组件只展示选择面板
<demo-block src="example/datePicker/only-panel"></demo-block>

### DatePicker 属性

<table-block type="props" :data="props"></table-block>

### DatePicker 事件

<table-block type="events" :data="events"></table-block>