<template>
  <div class="alert-list">
    <bp-alert status="info" title="Default icon" />
    <bp-alert status="info" title="Hide icon" hide-icon />
    <bp-alert status="info" title="Custom icon" :icon="IconHeart3Fill" />
  </div>
</template>

<script setup lang="ts">
import { IconHeart3Fill } from "birdpaper-icon";
</script>

<style lang="scss" scoped>
.alert-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
