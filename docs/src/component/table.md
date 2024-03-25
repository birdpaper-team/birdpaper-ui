<script setup lang="ts">
  import props from "../example/table/props.ts";
  import event from "../example/table/event.ts";
  import columnProps from "../example/table/column-props.ts";
  import selectProps from "../example/table/select-props.ts";
</script>

# 表格 Table

用于将数据统一展示、分析、操作等。

### 基础用法

基础的表格数据展示
<demo-block src="example/table/basic" stack-blitz-name="table-basic-1"></demo-block>

### 数据选择
目前，你可以通过 `selection` 属性配置数据的选择
<demo-block src="example/table/select" stack-blitz-name="table-select-1"></demo-block>

### 自定义列渲染

通过 `columns` 插槽或者 `scope.customRender` 自定义渲染内容
<demo-block src="example/table/custom-column" stack-blitz-name="table-custom-column"></demo-block>

### 文本省略和提示

设置 `ellipsis` 和 `tooltip` 开启文本省略和气泡提示
<demo-block src="example/table/table-tooltip" stack-blitz-name="table-table-tooltip"></demo-block>

### Table 属性

<table-block type="props" :data="props"></table-block>

### Table 事件

<table-block type="event" :data="event"></table-block>

### TableColumn 属性

<table-block type="props" :data="columnProps"></table-block>

### Selection 配置

<table-block type="props" :data="selectProps"></table-block>