<script setup lang="ts">
  import props from "../example/switch/props.ts";
</script>
# 开关 Switch
用于一个互斥的交互操作

### 基础用法
通过绑定 `Boolean` 值控制选择状态
<demo-block src="example/switch/basic"></demo-block>

### 选项禁用

通过 `disabled` 属性控制不可选状态
<demo-block src="example/switch/disabled"></demo-block>


### 异步关闭
通过 `on-before-ok` 控制开关的异步操作
<demo-block src="example/switch/async"></demo-block>


### Switch 属性

<table-block type="props" :data="props"></table-block>