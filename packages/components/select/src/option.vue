<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="Option">
const props = defineProps({
  value: { type: [String, Number], default: "" },
  label: { type: [String, Number], default: "" },
});
const name = "option";
</script>
