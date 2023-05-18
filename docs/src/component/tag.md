<script setup lang="ts">
  import props from "../example/tag/props.ts";
</script>

# 标签 Tag
展示简短信息，用于数据选择、分类。

### 基础用法
基础标签用法
<demo-block src="example/tag/basic"></demo-block>

### 标签状态

一共有 5 种标签状态，它们通过`status` 属性控制，分别是`normal` - 普通，`primary` - 主要，`success` - 成功，`warning` - 警告，`danger` - 危险。
<demo-block src="example/tag/status"></demo-block>


### 可关闭
可通过 `closeable` 控制标签关闭
<demo-block src="example/tag/closeable"></demo-block>

### Tag 属性

<table-block type="props" :data="props"></table-block>
