<template>
  <bp-space :size="16">
    <bp-button @click="openModal('info')">Info</bp-button>
    <bp-button @click="openModal('success')">Success</bp-button>
    <bp-button @click="openModal('warning')">Warning</bp-button>
    <bp-button @click="openModal('error')">Error</bp-button>
    <bp-button @click="openModal('confirm')">Confirm</bp-button>
  </bp-space>
</template>

<script lang="ts" setup>
import { Modal } from "@birdpaper-ui/components";

const openModal = (type: string) => {
  (Modal as any)[type]({
    title: `${type} 对话框`,
    content: `这是一个 ${type} 类型的对话框`,
  });
};
</script>
