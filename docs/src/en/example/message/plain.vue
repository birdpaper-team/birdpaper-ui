<template>
  <bp-space :size="16">
    <bp-button @click="handleDefault">Default style</bp-button>
    <bp-button @click="handlePlain">Simple mode</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

const handleDefault = () => {
  Message.success({ content: "Default style message" });
};

const handlePlain = () => {
  Message.success({ content: "Simple mode message", plain: true });
};
</script>
