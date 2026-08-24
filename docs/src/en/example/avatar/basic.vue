<template>
  <bp-space>
    <bp-avatar v-for="size in sizeList" :size>
      <IconUser3Line />
    </bp-avatar>
  </bp-space>
</template>

<script setup lang="ts">
import { IconUser3Line } from "birdpaper-icon";

const sizeList = ["mini", "small", "default", "large"];
</script>