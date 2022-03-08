<template>
  <li :class="className" @click="onClick">
    <span v-if="text" class="pagination-text">{{ text }}</span>
    <i v-else class="pagination-icon ri-arrow-right-s-line"></i>
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
  let name = ["bp-pagination-item", "bp-next-page"];
  if (props.disabled) name.push("pagination-item-disabled");
  return name;
});

const onClick = () => {
  if (props.disabled) return;
  emit("click", 'next')
}
</script>

<script>
export default { name: "bp-pagination-next" }
</script>