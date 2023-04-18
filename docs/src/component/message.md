<script setup lang="ts">
  import methods from "../example/message/methods.ts";
  import props from "../example/message/props.ts";
</script>
# 消息提示 Message
用于全局文本提示反馈。

### 基础用法
通过调用 `Message` 方法弹出消息提示。
<demo-block src="example/message/basic"></demo-block>

### 消息类型
除了纯文本外，还提供了3种提示类型，分别是`success` - 成功提示，`warning` - 警告提示，`error` - 错误提示。
<demo-block src="example/message/type"></demo-block>

### 加载提示
提供 `loading` 方法展示加载状态，并在结束时调用 `close` 方法结束加载。
<demo-block src="example/message/loading"></demo-block>

### 可关闭
可通过配置中的 `closeable` 属性控制是否支持手动关闭选项。
<demo-block src="example/message/closeable"></demo-block>

### Message 方法

<table-block type="methods" :data="methods"></table-block>

### Message 配置

<table-block type="props" :data="props"></table-block>