<template>
  <div class="demo-area">
    <div class="effect-item">
      <p>fade</p>
      <bp-image
        width="200px"
        height="140px"
        src="https://cos.birdpaper.design/birdpaper-ui/v2/image-demo/img_1.jpg?imageMogr2/thumbnail/!80p"
        load-effect="fade"
      />
    </div>
    <div class="effect-item">
      <p>blur</p>
      <bp-image
        width="200px"
        height="140px"
        src="https://cos.birdpaper.design/birdpaper-ui/v2/image-demo/img_1.jpg?imageMogr2/thumbnail/!80p"
        load-effect="blur"
      />
    </div>
    <div class="effect-item">
      <p>none</p>
      <bp-image
        width="200px"
        height="140px"
        src="https://cos.birdpaper.design/birdpaper-ui/v2/image-demo/img_1.jpg?imageMogr2/thumbnail/!80p"
        load-effect="none"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-area {
  display: flex;
  gap: 16px;

  .effect-item {
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
