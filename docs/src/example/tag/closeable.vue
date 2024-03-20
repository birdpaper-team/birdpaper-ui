<template>
  <bp-tag v-if="show" @close="onClose" closeable>Closeable tag</bp-tag>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref<boolean>(true);
const onClose = () => {
  show.value = false;
};
</script>
