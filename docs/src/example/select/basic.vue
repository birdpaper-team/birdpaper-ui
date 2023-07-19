<template>
  <bp-select v-model="val" placeholder="请选择">
    <bp-option value="1">选项一</bp-option>
    <bp-option value="2">选项二</bp-option>
    <bp-option value="3">选项三</bp-option>
  </bp-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref('');
</script>
