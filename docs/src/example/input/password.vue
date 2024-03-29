<template>
  <bp-input :style="{ width: '220px' }" type="password" v-model="psw" placeholder="Please enter your PIN"></bp-input>
</template>

<script setup lang="ts">
import { ref } from "vue";

const psw = ref("");
</script>
