<template>
  <bp-checkbox-group v-model="val" direction="horizontal">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>

  <bp-checkbox-group v-model="val" direction="vertical" style="margin-top: 40px;">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref([]);
const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
</script>
