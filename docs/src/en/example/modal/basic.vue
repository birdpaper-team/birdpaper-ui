<template>
  <bp-button @click="handleClick">open modal</bp-button>
</template>

<script lang="ts" setup>
import { Modal } from "@birdpaper-ui/components";

const handleClick = ()=>{
  Modal.info({
    title: "title",
    content: "content",
  });
}
</script>
