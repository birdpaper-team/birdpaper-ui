<template>
  <div :class="cls" v-if="visible">
    <div v-if="dot" :class="[`${name}-dot`, `${name}-dot-${status}`]"></div>

    <span :class="`${name}-inner`">
      <slot></slot>
    </span>

    <i v-if="closeable" class="ri-close-line" @click="handleClose"></i>
  </div>
</template>

<script setup lang="ts" name="Tag">
import { computed, ref } from "vue";

const props = defineProps({
  status: { type: String, default: "normal" },
  dot: { type: Boolean, default: false },
  closeable: { type: Boolean, default: false },
});
const name = "bp-tag";

const cls = computed(() => {
  return [name, props.dot ? `${name}-dot-box` : `${name}-${props.status}`];
});

const visible = ref(true);
const handleClose = () => {
  if (!props.closeable) return;

  visible.value = false;
};
</script>
