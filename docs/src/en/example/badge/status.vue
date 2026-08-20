<template>
  <bp-space :size="32">
    <bp-badge :count="5" status="primary">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge :count="3" status="success">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge :count="1" status="warning">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge :count="99" status="danger">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
    <bp-badge :count="2" status="gray">
      <IconNotification4Line fill="#595959" />
    </bp-badge>
  </bp-space>
</template>

<script setup lang="ts">
import { IconNotification4Line } from "birdpaper-icon";
</script>
