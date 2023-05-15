<script setup lang="ts">
  import props from "../example/checkbox/props.ts";
</script>

# 复选框 Checkbox

### 基础用法

通过绑定 `Boolean` 值控制选择状态
<demo-block src="example/checkbox/basic"></demo-block>

### 选项禁用

通过 `disabled` 属性控制不可选状态
<demo-block src="example/checkbox/disabled"></demo-block>

### Checkbox 属性

<table-block type="props" :data="props"></table-block>