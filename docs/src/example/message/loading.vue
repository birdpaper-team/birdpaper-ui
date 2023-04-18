<template>
  <bp-button @click="handleClick">点击加载</bp-button>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = () => {
  const msg = Message.loading("正在加载...");

  setTimeout(() => {
    msg.close();
  }, 4000);
};
</script>
