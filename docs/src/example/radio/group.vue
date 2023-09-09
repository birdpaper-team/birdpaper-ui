<template>
  <bp-radio-group v-model="val" type="button">
    <template v-for="v in optionList">
      <bp-radio :value="v.value">{{ v.label }}</bp-radio>
    </template>
  </bp-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref(0);
const optionList = [
  { value: 0, label: "选项一" },
  { value: 1, label: "选项二" },
];
</script>
