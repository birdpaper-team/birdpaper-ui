<script setup lang="ts">
  import props from "../example/timePicker/props.ts";
  import events from "../example/timePicker/events.ts";
</script>

# 时间选择 TimePicker

选择某一特定时间

### 基础用法

配合 `v-mdoel` 实现日期选择
<demo-block src="example/timePicker/basic" stack-blitz-name="timepicker-basic"></demo-block>

### 仅面板

通过 `hide-trigger` 属性可以控制组件只展示选择面板
<demo-block src="example/timePicker/only-panel" stack-blitz-name="timepicker-only-panel"></demo-block>

### TimePicker 属性

<table-block type="props" :data="props"></table-block>

### TimePicker 事件

<table-block type="events" :data="events"></table-block>
