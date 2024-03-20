<template>
  <bp-button @click="handleClick">Loading</bp-button>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = () => {
  const msg = Message.loading("Loading...");

  setTimeout(() => {
    msg.remove();
  }, 4000);
};
</script>
