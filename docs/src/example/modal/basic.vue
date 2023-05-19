<template>
  <bp-button>打开对话框</bp-button>

<bp-modal :visible="show"></bp-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
</script>