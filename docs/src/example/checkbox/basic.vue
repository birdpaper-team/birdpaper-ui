<template>
  <bp-space>
    <bp-checkbox-group v-model="val" :max="3">
      <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
    </bp-checkbox-group>
  </bp-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref([]);
const options = ["tag1", "tag2", "tag3", "tag4", "tag5"];
</script>
