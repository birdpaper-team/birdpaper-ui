<template>
  <p class="font-size-13px m-2px! opacity60">Justify</p>
  <bp-radio-group v-model="justify" class="mb-10" type="button">
    <bp-radio v-for="v in justifyList" :value="v">{{ v }}</bp-radio>
  </bp-radio-group>

  <p class="font-size-13px m-2px! opacity60">Align</p>
  <bp-radio-group v-model="align" class="mb-10" type="button">
    <bp-radio v-for="v in alignList" :value="v">{{ v }}</bp-radio>
  </bp-radio-group>

  <bp-space :align :justify>
    <bp-avatar :style="{ background: '#165dff', color: '#fff' }">BP</bp-avatar>
    <bp-tag status="primary">Tag 1</bp-tag>
    <bp-switch></bp-switch>
    <bp-link>Link 1</bp-link>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const justify = ref("flex-start");
const align = ref("flex-start");

const justifyList = ["flex-start", "flex-end", "center", "space-between", "space-evenly", "space-around"];
const alignList = ["flex-start", "flex-end", "center", "baseline"];
</script>
