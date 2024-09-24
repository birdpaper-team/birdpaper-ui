<template>
  <bp-button @click="handleMsg">Open Message</bp-button>
</template>

<script setup lang="ts">
import { Message } from "@birdpaper-ui/components";
import { ref } from "vue";

const num = ref(1);
const handleMsg = () => {
  num.value++;

  Message.success({
    content: `success:${num.value}`,
    plain: false,
    closeable: true,
    position: "top",
    onClose: () => {
      console.log("close");
    },
  });
};
</script>
