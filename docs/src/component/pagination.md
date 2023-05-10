<script setup lang="ts">
  import props from "../example/pagination/props.ts";
  import events from "../example/pagination/events.ts";
</script>

# 分页 Pagination

用于控制分页数据或者页面之间的跳转。

### 基础用法

基础分页用法，支持页码跳转、上下翻页。
<demo-block src="example/pagination/basic"></demo-block>

### 最大页码控制

通过 `max-pager` 控制显示的页码数量，默认为 7 个，其余省略展示。
<demo-block src="example/pagination/max"></demo-block>

### 每页条数

通过 `layout` 属性配置，开启每页条数配置。
<demo-block src="example/pagination/sizes"></demo-block>

### 页码跳转

通过 `layout` 属性配置，开启页码跳转。
<demo-block src="example/pagination/jumper"></demo-block>

### 自定义布局和文案

分页器文案和布局顺序均支持自定义。
<demo-block src="example/pagination/custom"></demo-block>

### Pagination 属性

<table-block type="props" :data="props"></table-block>

### Pagination 事件

<table-block type="events" :data="events"></table-block>
