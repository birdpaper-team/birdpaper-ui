<template>
  <li :class="className" @click="onClick">
    <span v-if="text" class="page-text">{{ text }}</span>
    <i v-else class="page-icon ri-arrow-left-s-line"></i>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  text: { type: String, default: "" }, // 替代图标显示的上一页文字
  disabled: { type: Boolean, default: false }, // 是否禁用
});

const emit = defineEmits(["click"]);

const className = computed(() => {
  let name = ["bp-page-item", "bp-prev-page"];
  if (props.disabled) name.push("page-item-disabled");
  return name;
});

const onClick = () => {
  if (props.disabled) return;
  emit("click", 'prev')
}
</script>

<script>
export default { name: "bp-pagination-prev" }
</script>