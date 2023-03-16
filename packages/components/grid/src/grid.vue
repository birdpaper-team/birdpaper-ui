<template>
  <div :class="cls" ref="rowRef">
    <slot />
  </div>
</template>

<script setup lang="ts" name="row">
import { computed, nextTick, onMounted, PropType, ref, useSlots } from "vue";
import { Align, Justify } from "./types";
import col from "./col.vue";

const props = defineProps({
  /** 栏位间隔 Field spacing */
  gutter: { type: [String, Number], default: "" },
  /** 水平对齐方式 Horizontal alignment */
  justify: { type: String as PropType<Justify>, default: "start" },
  /** 垂直对齐方式 Vertical alignment */
  align: { type: String as PropType<Align>, default: "start" },
});

const rowRef = ref();
const name = "row";
const cls = computed(() => {
  return [`bp-${name}`];
});
const slot = useSlots();
const row = slot.default();

onMounted(() => {
  nextTick(() => {
    row.forEach((item, index) => {
      const isCol = item.type === col;
      if (isCol) {
        rowRef.value.children[index].style.paddingLeft = `${props.gutter}px`;
        rowRef.value.children[index].style.paddingRight = `${props.gutter}px`;
      }
    });
  });
});
</script>
