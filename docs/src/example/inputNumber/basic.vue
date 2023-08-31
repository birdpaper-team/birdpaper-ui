<template>
  {{ val }}
  <bp-input-number :style="{ width: '220px' }" v-model="val" placeholder="请输入"></bp-input-number>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<number>(1);
</script>
