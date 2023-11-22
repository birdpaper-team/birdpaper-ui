<template>
  <bp-space>
    <bp-button @click="handleClick('top')">顶部弹出</bp-button>
    <bp-button @click="handleClick('bottom')">底部弹出</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = (position: "top" | "bottom") => {
  Message.text({ content: "这是一条文本类型的消息提示", position });
};
</script>
