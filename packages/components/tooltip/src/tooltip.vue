<template>
  <div :class="clsBlockName"></div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";

defineOptions({ name: "Tooltip" });
const { clsBlockName } = useNamespace("tooltip");
</script>