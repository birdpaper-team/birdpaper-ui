<template>
  <bp-space :size="16">
    <bp-image
      width="200px"
      height="150px"
      src="https://invalid-url/broken.jpg"
      fallback="https://cos.birdpaper.design/birdpaper-ui/v2/image-demo/img_1.jpg?imageMogr2/thumbnail/!80p"
    />
    <bp-image width="200px" height="150px" src="https://invalid-url/broken.jpg">
      <template #error>
        <div class="error-slot">
          <IconCloseCircleLine size="28" />
          <span>加载失败</span>
        </div>
      </template>
    </bp-image>
  </bp-space>
</template>

<script setup lang="ts">
import { IconCloseCircleLine } from "birdpaper-icon";
</script>

<style lang="scss" scoped>
.error-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #c9cdd4;
  gap: 4px;

  span {
    font-size: 12px;
  }
}
</style>
