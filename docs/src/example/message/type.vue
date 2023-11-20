<template>
  <bp-space type="vertical" size="mini">
    <bp-space>
      <bp-button status="success" @click="handleClick('success', true)">成功提示</bp-button>
      <bp-button status="warning" @click="handleClick('warning', true)">警告提示</bp-button>
      <bp-button status="danger" @click="handleClick('error', true)">错误提示</bp-button>
    </bp-space>
    <bp-space>
      <bp-button type="primary" status="success" @click="handleClick('success')">成功提示</bp-button>
      <bp-button type="primary" status="warning" @click="handleClick('warning')">警告提示</bp-button>
      <bp-button type="primary" status="danger" @click="handleClick('error')">错误提示</bp-button>
    </bp-space>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "birdpaper-ui";

const handleClick = (type: "success" | "warning" | "error", plain: boolean = false) => {
  Message[type]({ content: `这是 ${type} 类型的消息提示`, plain });
};
</script>
