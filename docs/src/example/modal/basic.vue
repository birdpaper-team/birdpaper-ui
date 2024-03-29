<template>
  <bp-button @click="handleOpen">Open modal</bp-button>

  <bp-modal v-model="show" title="Title">
    <p>Modal content.</p>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = () => {
  show.value = true;
};
</script>
