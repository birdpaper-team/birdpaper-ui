<script setup lang="ts">
  import props from "../example/table/props.ts";
</script>

# 表格 Table

用于将数据统一展示、分析、操作等。

### 基础用法

基础的表格数据展示
<demo-block src="example/table/basic"></demo-block>

### 自定义列渲染

通过 `columns` 插槽或者 `scope.customRender` 自定义渲染内容
<demo-block src="example/table/custom-column"></demo-block>

### Table 属性

<table-block type="props" :data="props"></table-block>
