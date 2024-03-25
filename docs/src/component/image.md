<script setup lang="ts">
  import props from "../example/image/props.ts";
  import events from "../example/image/events.ts";
  import slots from "../example/image/slots.ts";
</script>

# 图片 Image
展示图片

注：示例中引用图片均为本站作者拍摄，如需引用，麻烦先征得作者同意。

### 基础用法
基础展示图片
<demo-block src="example/image/basic" stack-blitz-name="image-basic"></demo-block>

### 图片适应
通过 `fit` 属性设置不同的适应类型
<demo-block src="example/image/fit" stack-blitz-name="image-fit"></demo-block>

### Image 属性

<table-block type="props" :data="props"></table-block>

### Image 事件

<table-block type="events" :data="events"></table-block>

### Image 插槽

<table-block type="slots" :data="slots"></table-block>
