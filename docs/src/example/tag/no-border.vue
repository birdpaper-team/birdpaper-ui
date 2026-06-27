<template>
  <bp-space>
    <bp-tag v-for="item in status" :key="item" :status="item">Tag {{ item }}</bp-tag>
  </bp-space>
</template>

<script setup lang="ts">
import { TagStatus } from "@birdpaper-ui/components";
import { ref } from "vue";

const status = ref<TagStatus[]>(["gray", "primary", "success", "warning", "danger"]);
</script>
