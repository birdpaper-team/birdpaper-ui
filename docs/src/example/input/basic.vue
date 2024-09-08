<template>
  <bp-input v-model="txt" style="width: 220px;" placeholder="请输入内容"></bp-input>
</template>

<script setup lang="ts">
import { ref } from "vue";

const txt = ref("");
</script>
