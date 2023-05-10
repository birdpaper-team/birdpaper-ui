<template>
  <li :class="clsName" @click="handleClick">
    <span v-if="text" v-text="text"></span>
    <i v-else class="ri-arrow-right-s-line"></i>
  </li>
</template>

<script setup lang="ts" name="PaginationNext">
import { computed } from "vue";

const props = defineProps({
  text: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits<{
  (e: "click"): void;
}>();

const name = "bp-pagination";

const clsName = computed(() => {
  let cls = [`${name}-item`, `${name}-next`];

  if (props.disabled) {
    cls.push(`${name}-item-disabled`);
  }
  return cls;
});

const handleClick = () => {
  if (props.disabled) return;

  emits("click");
};
</script>
