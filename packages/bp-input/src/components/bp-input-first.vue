<template>
  <div :class="`bp-input-first bp-${props.size}-height`" v-if="render">
    <div
      v-if="mode === 'prefix'"
      class="bp-input-prefix"
    >
      <i :class="icon"></i>
    </div>

    <div class="bp-input-prepend" v-else><slot></slot></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  render: { type: Boolean, default: false }, // 开启头部区域渲染
  mode: { type: String, default: "prefix" }, // 头部模式，prefix-头部内容，prepend-后置内容
  icon: { type: String, default: "" }, // prefix 下的头部图标
  size: { type: String, default: "normal" }, // 输入框尺寸
});

</script>

<script>
export default { name: "bp-input-first" };
</script>
