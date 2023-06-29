<template>
  <bp-space>
    <bp-link @click="onTest">链接</bp-link>
    <bp-link status="success">链接</bp-link>
    <bp-link status="warning">链接</bp-link>
    <bp-link status="danger">链接</bp-link>
  </bp-space>
</template>

<script setup lang="ts">
const onTest = ()=>{
  console.log('[  ]-13', );
  console.log('[  ]-14', );
}
</script>