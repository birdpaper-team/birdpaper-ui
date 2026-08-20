<template>
  <bp-space :size="16">
    <bp-button @click="handleShort">Close in 3s</bp-button>
    <bp-button @click="handleLong">Close in 10s</bp-button>
    <bp-button @click="handleManual">Manual close</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";

const handleShort = () => {
  Message.text({ content: "Auto-close after 3 seconds", duration: 3000 });
};

const handleLong = () => {
  Message.text({ content: "Auto-close after 10 seconds", duration: 10000 });
};

const handleManual = () => {
  Message.text({ content: "Does not auto-close; close manually", duration: 0, closeable: true });
};
</script>
