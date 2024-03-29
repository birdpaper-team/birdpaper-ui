<template>
  <bp-input :style="{ width: '220px' }" v-model="val" show-limit :maxlength="11" placeholder="Please enter"></bp-input>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref("");
</script>
