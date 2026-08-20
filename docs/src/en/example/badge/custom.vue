<template>
  <bp-space :size="32">
    <bp-badge text="NEW">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge text="HOT" status="danger">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
  </bp-space>
</template>

<script setup lang="ts">
import { IconNotification4Line } from "birdpaper-icon";
</script>
