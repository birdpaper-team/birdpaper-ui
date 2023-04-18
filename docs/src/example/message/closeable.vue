<template>
  <bp-button @click="handleClick">可关闭的提示</bp-button>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = () => {
  Message.text({
    content: "这是一条可手动关闭的消息提示",
    closeable: true,
  });
};
</script>
