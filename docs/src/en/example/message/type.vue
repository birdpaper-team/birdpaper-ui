<template>
  <bp-space :size="16">
    <bp-button @click="Message.text('This is a text message')">Text</bp-button>
    <bp-button @click="Message.success('Success')">Success</bp-button>
    <bp-button @click="Message.warning('Please note')">Warning</bp-button>
    <bp-button @click="Message.error('Failed')">Error</bp-button>
    <bp-button @click="Message.loading('Loading...')">Loading</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";
</script>
