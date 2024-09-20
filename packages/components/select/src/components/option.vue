<template>
  <div>option</div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";

defineOptions({ name: "Option" });
const { clsBlockName } = useNamespace("option");
</script>
