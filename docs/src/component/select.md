<script setup lang="ts">
  import props from "../example/select/props.ts";
  import events from "../example/select/events.ts";
</script>

# 选择器 Select
在总多选项中，通过下拉选择一个或者一组数据。

### 基础用法
基础的选择器用法
<demo-block src="example/select/basic"></demo-block>

### Select 属性

<table-block type="props" :data="props"></table-block>

### Select 事件

<table-block type="events" :data="events"></table-block>
