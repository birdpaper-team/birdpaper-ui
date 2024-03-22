<script setup lang="ts">
  import props from "../example/select/props.ts";
  import optionProps from "../example/select/option-props.ts";
  import events from "../example/select/events.ts";
</script>

# 选择器 Select

在总多选项中，通过下拉选择一个或者一组数据。

### 基础用法

基础的选择器用法
<demo-block src="example/select/basic" stack-blitz-name="select-basic"></demo-block>

### 选项禁用

通过控制选项的 `disabled` 属性以实现不可选择某一项
<demo-block src="example/select/disabled" stack-blitz-name="select-disabled"></demo-block>

### Select 属性

<table-block type="props" :data="props"></table-block>

### Option 属性

<table-block type="props" :data="optionProps"></table-block>

### Select 事件

<table-block type="events" :data="events"></table-block>
