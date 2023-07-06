<script setup lang="ts">
  import props from "../example/modal/props.ts";
  import events from "../example/modal/events.ts";
</script>

# 对话框 Modal
在当前页面打开一个与用户对话、交互的弹框。

### 基础用法
基础的弹框使用方式
<demo-block src="example/modal/basic"></demo-block>

### 自定义底部
通过底部插槽 `footer` 自定义内容
<demo-block src="example/modal/footer"></demo-block>

### Modal 属性

<table-block type="props" :data="props"></table-block>

### Modal 事件

<table-block type="events" :data="events"></table-block>
