<template>
  <bp-space :size="16">
    <bp-button @click="handleTop">Popup top</bp-button>
    <bp-button @click="handleBottom">Popup bottom</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

const handleTop = () => {
  Message.success({ content: "Slide from top", position: "top" });
};

const handleBottom = () => {
  Message.success({ content: "Slide from bottom", position: "bottom" });
};
</script>
