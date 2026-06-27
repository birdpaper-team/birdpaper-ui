<template>
  <bp-space :size="16">
    <bp-button @click="handleShort">3 秒关闭</bp-button>
    <bp-button @click="handleLong">10 秒关闭</bp-button>
    <bp-button @click="handleManual">手动关闭</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

const handleShort = () => {
  Message.text({ content: "3 秒后自动关闭", duration: 3000 });
};

const handleLong = () => {
  Message.text({ content: "10 秒后自动关闭", duration: 10000 });
};

const handleManual = () => {
  Message.text({ content: "不会自动关闭，请手动关闭", duration: 0, closeable: true });
};
</script>
