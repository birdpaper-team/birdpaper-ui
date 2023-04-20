<template>
  <div></div>
</template>

<script setup lang="ts" name="Radio">
const props = defineProps({
  modelValue: { type: [String, Number, Boolean], default: false },
  value: { type: [String, Number, Boolean], default: false },
  disabled: { type: Boolean, default: false },
});
const name = "bp-radio";
</script>
