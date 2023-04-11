<template>
  <bp-input :style="{ width: '220px' }" v-model="val" clearable placeholder="请输入内容"></bp-input>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
