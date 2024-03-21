<script setup lang="ts">
  import rowProps from "../example/grid/row-props.ts";
  import colProps from "../example/grid/col-props.ts";
</script>

# 栅格 Grid
通过划分 24 个栅格，保证页面布局的协调性。

### 基础用法
通过 `row` 和 `col` 可以设定不同的栏位占比。
<demo-block src="example/grid/basic" stack-blitz-name="grid-basic"></demo-block>

### 栅格间距
通过给 `row` 设置 `gutter` 属性实现控制栅格之间的距离。
<demo-block src="example/grid/gutter" stack-blitz-name="grid-gutter"></demo-block>

### 栅格偏移
在 `col` 上通过设置 `offset` 属性可实现偏移距离。
<demo-block src="example/grid/offset" stack-blitz-name="grid-offset"></demo-block>

### 响应式布局
通过分别设置对应尺寸下的属性实现响应式。
<demo-block src="example/grid/responsive" stack-blitz-name="grid-responsive-1"></demo-block>

### Row 属性
<table-block type="props" :data="rowProps"></table-block>

### Col 属性
<table-block type="props" :data="colProps"></table-block>