<template>
  <bp-select v-model="val" multiple placeholder="请选择" style="width: 240px">
    <bp-option value="1">选项 1</bp-option>
    <bp-option value="2">选项 2</bp-option>
    <bp-option value="3">选项 3</bp-option>
    <bp-option value="4">选项 4</bp-option>
  </bp-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref([]);
</script>
