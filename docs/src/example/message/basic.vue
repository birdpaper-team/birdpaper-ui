<template>
  <div>
    <bp-button type="plain" status="primary" @click="onOpen">打开消息提示</bp-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const onOpen = () => {
  Message.text({ content: "This is text content." });
  Message.error("网络繁忙，请稍候重试");
  Message.warning("网络繁忙，请稍候重试");
  Message.success("网络繁忙，请稍候重试");
};
</script>
