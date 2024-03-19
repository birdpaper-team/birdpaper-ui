<template>
  <bp-space>
    <bp-avatar v-for="v in sizes" :size="v">Sam</bp-avatar>
  </bp-space>
</template>

<script setup lang="ts">
const sizes = ['mini', 'small', 'normal', 'large'];
</script>