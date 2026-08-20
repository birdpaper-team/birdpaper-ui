<template>
  <bp-button @click="show = true">Fullscreen Modal</bp-button>

  <bp-modal v-model="show" title="Fullscreen dialog" fullscreen>
    <p>This is a fullscreen dialog for large content.</p>
  </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>
