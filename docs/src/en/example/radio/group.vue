<template>
  <bp-space type="vertical">
    <bp-radio-group v-model="val">
      <template v-for="v in optionList">
        <bp-radio :value="v">{{ v }}</bp-radio>
      </template>
    </bp-radio-group>
    <bp-radio-group v-model="val1">
      <template v-for="v in optionList">
        <bp-radio :value="v">{{ v }}</bp-radio>
      </template>
    </bp-radio-group>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref('Male');
const val1 = ref('Female');
const optionList = ["Male", "Female", "Unknown"];
</script>
