<template>
  <bp-button @click="handleClick">文本消息提示</bp-button>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = () => {
  Message.text("这是一条文本类型的消息提示");
};
</script>
