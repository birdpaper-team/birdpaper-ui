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
    title: `${type} dialog`,
    content: `This is a ${type} dialog`,
  });
};
</script>
