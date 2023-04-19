<template>
  <bp-textarea :style="{ width: '380px' }" v-model="val" placeholder="请输入" :maxlength="200" show-limit></bp-textarea>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
