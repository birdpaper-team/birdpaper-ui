<template>
  <bp-space>
    <bp-button @click="handleClick('top')">Top</bp-button>
    <bp-button @click="handleClick('bottom')">Bottom</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = (position: "top" | "bottom") => {
  Message.text({ content: "This is a text message.", position });
};
</script>
