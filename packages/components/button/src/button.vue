<template>
  <div :class="name"><slot /></div>
</template>

<script setup lang="ts">
defineOptions({ name: "button" });
const name = "bp-button";
</script>
