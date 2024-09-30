<template>
  <div :class="cls"></div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed } from "vue";
import { TextareaProps, textareaProps } from "./props";

defineOptions({ name: "Textarea" });
const { clsBlockName } = useNamespace("textarea");

const model = defineModel<string>({ default: "" });
const props: TextareaProps = defineProps(textareaProps);

const cls = computed<string[] | {}[]>(() => [clsBlockName, props?.disabled && `${clsBlockName}-disabled`]);
</script>
