<template>
  <div>
    <bp-radio v-model="val" :value="true">选项一</bp-radio>
    <bp-button @click="val = !val">测试</bp-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(true);
</script>
