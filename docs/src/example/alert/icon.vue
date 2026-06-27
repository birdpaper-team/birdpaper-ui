<template>
  <div class="alert-list">
    <bp-alert status="info" title="默认图标" />
    <bp-alert status="info" title="隐藏图标" hide-icon />
    <bp-alert status="info" title="自定义图标" :icon="IconHeart3Fill" />
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
