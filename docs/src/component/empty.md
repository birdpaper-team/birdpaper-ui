<script setup lang="ts">
  import props from "../example/empty/props.ts";
</script>

# 空状态  Empty

在无数据时呈现的默认状态

### 基础用法
通过 `<bp-empty />` 使用基础空状态
<demo-block src="example/empty/basic" stack-blitz-name="empty-basic"></demo-block>

### 自定义内容
通过设置文本和图标内容实现组件自定义
<demo-block src="example/empty/custom" stack-blitz-name="empty-custom"></demo-block>

### Empty 属性

<table-block type="props" :data="props"></table-block>