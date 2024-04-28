<script setup lang="ts">
  import props from "../example/trigger/props.ts";
</script>

# 触发器 Trigger

### 基础用法
通过 `trigger` 属性控制触发形式
<demo-block src="example/trigger/basic" stack-blitz-name="trigger-basic"></demo-block>

### 位置
通过 `position` 属性控制浮层弹出位置
<demo-block src="example/trigger/position" stack-blitz-name="trigger-position"></demo-block>

### 监听滚动容器
通过 `update-at-scroll` 监听外层滚动区域，实时更新浮层弹出位置
<demo-block src="example/trigger/scroll" stack-blitz-name="trigger-scroll"></demo-block>

### Trigger 属性

<table-block type="props" :data="props"></table-block>