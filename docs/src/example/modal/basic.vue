<template>
  <bp-button @click="handleOpen">打开对话框</bp-button>

  <bp-modal v-model:visible="show"> </bp-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);

const handleOpen = ()=>{
  show.value = true;
}
</script>
