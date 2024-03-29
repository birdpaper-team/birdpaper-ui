<template>
  <bp-select v-model="val" placeholder="Please select" clearable>
    <bp-option value="1">Option  1</bp-option>
    <bp-option value="2">Option  2</bp-option>
    <bp-option value="3">Option  3</bp-option>
    <bp-option value="4">Option  4</bp-option>
  </bp-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref('');
</script>
