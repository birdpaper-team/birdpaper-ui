<template>
  <bp-space type="vertical">
    <bp-pagination
      v-for="size in sizesList"
      :key="size"
      :total="30"
      :page-size="10"
      :current="1"
      :size
    ></bp-pagination>
  </bp-space>
</template>

<script setup lang="ts">
const sizesList = ["mini", "small", "default", "large"];
</script>
