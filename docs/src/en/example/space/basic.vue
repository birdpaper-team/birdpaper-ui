<template>
  <p class="font-size-13px m-2px! opacity60">Type</p>
  <bp-radio-group v-model="type" class="mb-10" type="button">
    <bp-radio value="horizontal">Horizontal</bp-radio>
    <bp-radio value="vertical">Vertical</bp-radio>
  </bp-radio-group>

  <bp-space :type align="center">
    <bp-avatar :style="{ background: '#165dff', color: '#fff' }">BP</bp-avatar>
    <bp-tag status="primary">Tag 1</bp-tag>
    <bp-switch></bp-switch>
    <bp-link>Link 1</bp-link>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const type = ref("horizontal");
</script>
