<script setup lang="ts">
  import props from "../example/textarea/props.ts";
  import events from "../example/textarea/events.ts";
</script>

# 文本域 Textarea

多行文本控件

### 基础用法

展示最基础的多行文本域
<demo-block src="example/textarea/basic"></demo-block>

### 文本域状态

支持 `readonly` - 只读，`disabled` - 禁用，`is-danger` - 是否警示等属性控制状态
<demo-block src="example/textarea/status"></demo-block>

### 字数限制

在限定 `maxlength` 后，可以通过 `show-limit` 开启字数限制提示。
<demo-block src="example/textarea/limit"></demo-block>

### Textarea 属性

<table-block type="props" :data="props"></table-block>

### Textarea 事件

<table-block type="events" :data="events"></table-block>
