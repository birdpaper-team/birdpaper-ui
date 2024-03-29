<script setup lang="ts">
  import props from "../example/space/props.ts";
  import slots from "../example/space/slots.ts";
</script>

# 间距 Space

控制元素之间的距离和排版方式

### 基础用法

通过设定 `size` 属性，控制元素之间的间距，支持传入设定的尺寸，或者自定义大小。
<demo-block src="example/space/basic" stack-blitz-name="space-basic"></demo-block>

### 分隔符

通过 `split` 插槽设置分割内容
<demo-block src="example/space/split" stack-blitz-name="space-split"></demo-block>

### Space 属性

<table-block type="props" :data="props"></table-block>

### Space 插槽

<table-block type="slots" :data="slots"></table-block>
