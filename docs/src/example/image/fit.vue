<template>
  <div class="demo-area">
    <div class="fit-item" v-for="v in fitTypes">
      <p>{{ v }}</p>
      <bp-image
        :width="80"
        :height="80"
        :fit="v"
        src="https://cos.birdpaper.design/birdpaper-ui/v2/image-demo/img_1.jpg?imageMogr2/thumbnail/!80p"
      >
      </bp-image>
    </div>
  </div>
</template>

<script setup lang="ts">
const fitTypes = ["contain", "cover", "fill", "none", "scale-down"];
</script>

<style lang="less" scoped>
.demo-area {
  display: flex;
  .fit-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: #8c8c8c;
      font-size: 13px;
    }

    &:not(:first-child){
      border-left: 1px solid #f0f0f0;
    }
  }
}
</style>
