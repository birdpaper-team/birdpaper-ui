<template>
  <bp-space :size="16">
    <bp-button @click="handleDefault">默认样式</bp-button>
    <bp-button @click="handlePlain">简洁模式</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

const handleDefault = () => {
  Message.success({ content: "默认样式消息" });
};

const handlePlain = () => {
  Message.success({ content: "简洁模式消息", plain: true });
};
</script>
