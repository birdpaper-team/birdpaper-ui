<template>
  <bp-steps v-model="current" type="vertical">
    <bp-step v-for="v in progessList" :description="v.description">{{ v.title }}</bp-step>
  </bp-steps>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(0);
const progessList = [
  { title: "Enter email and invite code", description: "Supports common emails" },
  { title: "Validate email", description: "Enter email verification code" },
  { title: "Settings", description: "Set username and password" },
  { title: "Complete registration", description: "Welcome aboard" },
];
</script>
