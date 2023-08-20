<script setup lang="ts">
  import props from "../example/tooltip/props.ts";
  import slots from "../example/tooltip/slots.ts";
</script>

# 文字气泡 Tooltip

鼠标悬停或点击触发某区域时，弹出文本提示内容。

### 基础用法

通过 `content` 属性或插槽设置提示内容
<demo-block src="example/tooltip/basic"></demo-block>

### Tooltip 属性

<table-block type="props" :data="props"></table-block>

### Tooltip 插槽

<table-block type="slots" :data="slots"></table-block>
