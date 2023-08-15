<script setup lang="ts">
  import props from "../example/drawer/props.ts";
  import events from "../example/drawer/events.ts";
</script>
# 抽屉 Drawer
通过动作触发，从屏幕一端弹出操作面板。

### 基础用法
通过 `v-model` 控制抽屉弹出/收起
<demo-block src="example/drawer/basic"></demo-block>

### 异步关闭
通过 `on-before-ok` 控制抽屉的异步关闭功能
<demo-block src="example/drawer/asyncClose"></demo-block>

### Drawer 属性

<table-block type="props" :data="props"></table-block>

### Drawer 事件

<table-block type="events" :data="events"></table-block>
