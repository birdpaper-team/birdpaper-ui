<template>
  <bp-button @click="handleClick">Text message</bp-button>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = () => {
  Message.text("This is a text message.");
};
</script>
