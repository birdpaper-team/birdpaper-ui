<template>
  <li
    v-for="(item, index) in pages"
    :key="`page-item-${index}`"
    :class="[
      'bp-pagination-item',
      { 'pagination-item-active': item === currentPage },
      { 'pagination-item-disabled': disabled },
    ]"
    @click="onClick(item)"
  >
    <span>{{ index + 1 }}</span>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentPage: { type: [Number, String], default: 1 }, // 当前激活页
  pages: { type: [Number, String], default: 0 },
  disabled: { type: Boolean, default: false }, // 是否禁用
});
const emit = defineEmits(["click"]);

const onClick = (pageNum = "") => {
  if (props.disabled || pageNum === "") return;
  emit("click", 'page', pageNum);
};
</script>

<script>
export default { name: "bp-pagination-pager" };
</script>
