<template>
  <bp-button @click="handleOpen">打开对话框</bp-button>

  <bp-modal v-model="show">
    <p>对话框内容</p>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = () => {
  show.value = true;
};
</script>
