<template>
  <bp-button @click="handleClick">Closeable message</bp-button>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = () => {
  Message.text({
    content: "This is a message that can be close.",
    closeable: true,
    duration: 10000,
  });
};
</script>
