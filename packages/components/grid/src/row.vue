<template>
  <div :class="cls" ref="rowRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { RowProps, rowProps } from "./props";
import col from "./col.vue";
import { computed, nextTick, onMounted, ref, useSlots, VNode, VueElement } from "vue";

defineOptions({ name: "Row" });
const { clsBlockName } = useNamespace("row");

const props: RowProps = defineProps(rowProps);
const slots = useSlots();

const cls = computed(() => {
  return [`${clsBlockName}`, `justify-${props.justify}`, `align-${props.align}`];
});

const rowRef = ref();
const setGutter = (els?: VNode[]) => {
  const childrenEls = rowRef.value.children;

  els?.forEach((item, index) => {
    const isCol = item.type === col;

    if (isCol) {
      const el: VueElement = childrenEls[index];
      index !== 0 && (el.style.paddingLeft = `${props.gutter}px`);
      index !== childrenEls.length - 1 && (el.style.paddingRight = `${props.gutter}px`);
      return;
    }

    if (item.type.toString() === "Symbol(Fragment)") {
      setGutter(item.children as VNode[]);
    }
  });
};

onMounted(() => {
  nextTick(() => setGutter(slots?.default?.()));
});
</script>
