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
  { value: 0, label: "Option 1" },
  { value: 1, label: "Option 2" },
  { value: 2, label: "Option 3" },
];
</script>
