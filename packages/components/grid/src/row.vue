<template>
  <div :class="cls" ref="rowRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { RowProps, rowProps } from "./props";
import { computed, nextTick, onMounted, onUpdated, ref, watch } from "vue";

defineOptions({ name: "Row" });
const { clsBlockName } = useNamespace("row");

const props: RowProps = defineProps(rowProps);

const cls = computed(() => {
  return [
    `${clsBlockName.value}`,
    `${clsBlockName.value}-justify-${props.justify}`,
    `${clsBlockName.value}-align-${props.align}`,
  ];
});

const rowRef = ref<HTMLElement>();

const formatGutter = (gutter: string | number | undefined) => {
  if (gutter === undefined || gutter === null || gutter === "") return "";
  if (typeof gutter === "number") return `${gutter}px`;
  if (/^\d+(\.\d+)?$/.test(gutter)) return `${gutter}px`;
  return gutter;
};

const setGutter = () => {
  const els = rowRef.value?.children;
  if (!els?.length) return;

  const gutter = formatGutter(props.gutter);
  Array.from(els).forEach((node, index) => {
    const el = node as HTMLElement;
    el.style.paddingLeft = index !== 0 && gutter ? gutter : "";
    el.style.paddingRight = index !== els.length - 1 && gutter ? gutter : "";
  });
};

const applyGutter = () => nextTick(setGutter);

onMounted(applyGutter);
onUpdated(applyGutter);
watch(() => props.gutter, applyGutter);
</script>
