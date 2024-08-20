<template>
  <div :class="[clsBlockName, type]"><slot /></div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { buttonProps } from "./props";

defineOptions({ name: "Button" });
const { clsBlockName } = useNamespace("button");

const props = defineProps(buttonProps);
// console.log(props.type === '');
</script>
