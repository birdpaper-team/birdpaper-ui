<script setup lang="ts">
  import props from "../example/form/props.ts";
  import itemProps from "../example/form/itemProps.ts";
  import methods from "../example/form/methods.ts";
</script>

# 表单 Form
将一个或多个表单控件组合，实现具有收集、校验、保存提交功能的表单。

### 基础用法
基础的表单使用方式。
<demo-block src="example/form/basic" stack-blitz-name="form-basic-1"></demo-block>

### Form 属性
<table-block type="props" :data="props"></table-block>

### FormItem 属性
<table-block type="props" :data="itemProps"></table-block>

### Form 方法
<table-block type="methods" :data="methods"></table-block>
