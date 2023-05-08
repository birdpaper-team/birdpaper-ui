<template>
  <li :class="`${name}-item`" @click="handleClick">
    <span v-if="text" v-text="text"></span>
    <i v-else class="ri-arrow-right-s-line"></i>
  </li>
</template>

<script setup lang="ts" name="PaginationNext">
const props = defineProps({
  text: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

const name = "bp-pagination";

const handleClick = () => {
  if (props.disabled) return;
};
</script>
