<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { ColProps, colProps } from "./props";

defineOptions({ name: "Col" });
const { clsBlockName } = useNamespace("col");

const props: ColProps = defineProps(colProps);

const cls = computed(() => {
  let className = [clsBlockName];
  Number(props.span) !== 0 ? className.push(`${clsBlockName}-${props.span}`) : "";
  Number(props.offset) !== 0 ? className.push(`${clsBlockName}-offset-${props.offset}`) : "";

  const responsive: string[] = ["xs", "sm", "md", "lg", "xl"];

  for (let i = 0; i < responsive.length; i++) {
    const item = responsive[i];
    if (!props[item]) continue;

    if (typeof props[item] === "number") {
      className.push(`${clsBlockName}-${item}-${props[item]}`);
      continue;
    }

    if (typeof props[item] === "object") {
      props[item]?.span && className.push(`${clsBlockName}-${item}-${props[item]?.span}`);
      props[item]?.offset && className.push(`${clsBlockName}-${item}-offset-${props[item]?.offset}`);
    }
  }

  return className;
});
</script>
