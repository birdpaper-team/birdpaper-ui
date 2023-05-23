<script setup lang="ts">
  import props from "../example/spin/props.ts";
</script>

# 加载 Spin
用于在合适区域内展示加载状态，提升用户等待体验。

### 基础用法
基础的加载状态。
<demo-block src="example/spin/basic"></demo-block>

### 在容器中使用
支持在容器中使用 `loading` 控制加载状态。
<demo-block src="example/spin/container"></demo-block>

### Spin 属性

<table-block type="props" :data="props"></table-block>