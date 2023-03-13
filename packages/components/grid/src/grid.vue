<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts" name="row">
import { computed, PropType } from "vue";
import { Align, Justify } from "./types";

const props = defineProps({
  /** 栏位间隔 Field spacing */
  gutter: { type: [String, Number], default: "" },
  /** 水平对齐方式 Horizontal alignment */
  justify: { type: String as PropType<Justify>, default: "start" },
  /** 垂直对齐方式 Vertical alignment */
  align: { type: String as PropType<Align>, default: "start" },
});

const name = "row";
const cls = computed(() => {
  return [`bp-${name}`];
});
</script>
