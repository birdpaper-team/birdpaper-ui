<template>
  <bp-button @click="handleOpen">打开抽屉</bp-button>

  <bp-drawer v-model="show"></bp-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = () => {
  show.value = true;
};
</script>
