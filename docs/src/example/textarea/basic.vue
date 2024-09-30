<template>
  <bp-textarea v-model="txt" clearable style="width: 220px;margin-bottom: 16px;" placeholder="请输入内容"></bp-textarea>
</template>

<script setup lang="ts">
import { ref } from "vue";

const txt = ref("");
</script>
