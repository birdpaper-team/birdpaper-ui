<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { ColProps, colProps } from "./props";
import { ColResponsive } from "./types";

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
    const responsiveProp = props[item as keyof ColProps];
    if (!responsiveProp) continue;

    if (typeof responsiveProp === "number") {
      className.push(`${clsBlockName}-${item}-${responsiveProp}`);
      continue;
    }

    if (typeof responsiveProp === "object") {
      const responsiveObj = responsiveProp as ColResponsive & { span?: number; offset?: number };
      responsiveObj?.span && className.push(`${clsBlockName}-${item}-${responsiveObj.span}`);
      responsiveObj?.offset && className.push(`${clsBlockName}-${item}-offset-${responsiveObj.offset}`);
    }
  }

  return className;
});
</script>
