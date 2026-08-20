<template>
  <bp-radio-group v-model="size" class="mb-5" type="button">
    <bp-radio value="mini">Mini</bp-radio>
    <bp-radio value="small">Small</bp-radio>
    <bp-radio value="default">Normal</bp-radio>
    <bp-radio value="large">Large</bp-radio>
  </bp-radio-group>

  <bp-select v-model="val" :size placeholder="Please select" clearable style="width: 220px">
    <bp-option value="1">Option 1</bp-option>
    <bp-option value="2">Option 2</bp-option>
    <bp-option value="3">Option 3</bp-option>
    <bp-option value="4">Option 4</bp-option>
  </bp-select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref("default");
const val = ref();
</script>
