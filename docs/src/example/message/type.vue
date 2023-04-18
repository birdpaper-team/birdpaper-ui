<template>
  <bp-space>
    <bp-button status="success" @click="handleClick('success')">成功提示</bp-button>
    <bp-button status="warning" @click="handleClick('warning')">警告提示</bp-button>
    <bp-button status="danger" @click="handleClick('error')">错误提示</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = (type: "success" | "warning" | "error") => {
  Message[type](`这是 ${type} 类型的消息提示`);
};
</script>
