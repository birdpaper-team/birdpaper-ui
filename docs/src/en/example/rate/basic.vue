<template>
  <bp-rate v-model="val" :count="5"></bp-rate>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const val = ref(2.5);
</script>
