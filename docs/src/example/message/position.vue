<template>
  <bp-space :size="16">
    <bp-button @click="handleTop">顶部弹出</bp-button>
    <bp-button @click="handleBottom">底部弹出</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

const handleTop = () => {
  Message.success({ content: "从顶部弹出", position: "top" });
};

const handleBottom = () => {
  Message.success({ content: "从底部弹出", position: "bottom" });
};
</script>
