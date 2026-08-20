<template>
  <bp-radio-group v-model="size" class="mb-5" type="button">
    <bp-radio value="mini">Mini</bp-radio>
    <bp-radio value="small">Small</bp-radio>
    <bp-radio value="default">Normal</bp-radio>
    <bp-radio value="large">Large</bp-radio>
  </bp-radio-group>

  <bp-input style="width: 240px" :size clearable placeholder="Enter content" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const size = ref("default");
</script>
