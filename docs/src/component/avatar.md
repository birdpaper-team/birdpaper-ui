<script setup lang="ts">
  import props from "../example/avatar/props.ts";
  import events from "../example/avatar/events.ts";
</script>

# 头像 Avatar

以图片、图标、文字的形式展现头像

### 基础用法
基础使用，设置头像为文本或着图片信息。
<demo-block src="example/avatar/basic" stack-blitz-name="avatar-basic"></demo-block>

### 头像尺寸
提供四种头像尺寸以适应不同使用场景，分别是`mini` - 迷你，`small` - 小型，`normal` - 常规，`large` - 大型。
<demo-block src="example/avatar/size" stack-blitz-name="avatar-size"></demo-block>

### Avatar 属性

<table-block type="props" :data="props"></table-block>

### Avatar 事件

<table-block type="events" :data="events"></table-block>
