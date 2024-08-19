<template>
  <div :class="[clsBlockName, type]"><slot /></div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { buttonType } from "./types";
import { useNamespace } from "@birdpaper-ui/hooks";

defineOptions({ name: "Button" });

const { clsBlockName } = useNamespace("button");

const props = defineProps({
  type: { type: String as PropType<buttonType>, default: "" },
  disabled: { type: Boolean, default: false },
});
</script>
