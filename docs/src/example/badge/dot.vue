<template>
  <bp-space :size="32">
    <bp-badge dot status="danger">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge dot status="success">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge dot status="warning">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge dot status="primary">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
  </bp-space>
</template>

<script setup lang="ts">
import { IconNotification4Line } from "birdpaper-icon";
</script>
