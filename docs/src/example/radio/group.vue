<template>
  <bp-radio-group v-model="val" :option-list="optionList"> </bp-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(0);
const optionList = [
  { value: 0, label: "选项一" },
  { value: 1, label: "选项二" },
];
</script>
