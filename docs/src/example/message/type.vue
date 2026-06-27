<template>
  <bp-space :size="16">
    <bp-button @click="Message.text('这是一条文本消息')">Text</bp-button>
    <bp-button @click="Message.success('操作成功')">Success</bp-button>
    <bp-button @click="Message.warning('请注意')">Warning</bp-button>
    <bp-button @click="Message.error('操作失败')">Error</bp-button>
    <bp-button @click="Message.loading('加载中...')">Loading</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";
</script>
