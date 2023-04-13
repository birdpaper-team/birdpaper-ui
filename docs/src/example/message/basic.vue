<template>
  <div>
    <bp-button type="plain" status="primary" @click="onOpen">打开消息提示</bp-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const onOpen = () => {
  Message.text({ content: "This is text content." });
};
</script>
