<template>
  <div style="margin-bottom: 10px" v-for="v in status">
    <bp-alert :status="v" title="Tip"> </bp-alert>
  </div>
</template>

<script setup lang="ts">
const status = ["info", "success", "warning", "danger"];
</script>
