<template>
  <bp-space>
    <bp-tag v-for="(item, index) in status" :key="item" border :status="item">Tag {{ index + 1 }}</bp-tag>
  </bp-space>
</template>

<script setup lang="ts">
import { TagStatus } from "@birdpaper-ui/components";
import { ref } from "vue";

const status = ref<TagStatus[]>(["gray", "primary", "success", "warning", "danger"]);
</script>
