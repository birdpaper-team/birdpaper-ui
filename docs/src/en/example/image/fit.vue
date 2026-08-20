<template>
  <div class="demo-area">
    <div class="fit-item" v-for="fit in fitTypes" :key="fit">
      <p>{{ fit }}</p>
      <bp-image
        width="80px"
        height="80px"
        :fit
        src="https://cos.birdpaper.design/birdpaper-ui/v2/image-demo/img_1.jpg?imageMogr2/thumbnail/!80p"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fitTypes = ["fill", "contain", "cover", "none", "scale-down"];
</script>

<style lang="scss" scoped>
.demo-area {
  display: flex;
  gap: 16px;
  .fit-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    p {
      color: #8c8c8c;
      font-size: 13px;
    }
  }
}
</style>
