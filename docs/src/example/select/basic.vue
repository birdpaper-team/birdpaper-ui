<template>
  <div>
    <bp-select v-model="val" placeholder="请选择">
      <bp-option :value="1">选项一</bp-option>
      <bp-option :value="2">选项二</bp-option>
      <bp-option :value="3">选项三</bp-option>
      <bp-option :value="4">选项四</bp-option>
    </bp-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(2);
</script>
