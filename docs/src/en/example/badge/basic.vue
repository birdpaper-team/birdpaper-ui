<template>
  <bp-space :size="32">
    <bp-badge :count="5">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge :count="100" :max-count="99">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge :count="0">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
  </bp-space>
</template>

<script setup lang="ts">
import { IconNotification4Line } from "birdpaper-icon";
</script>
