<template>
  <div :class="name"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: "Button" });
const name = "bp-button";
</script>
