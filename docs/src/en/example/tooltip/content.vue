<template>
  <bp-tooltip>
    <bp-button>Custom content</bp-button>
    <template #content>
      <div class="custom-content">
        <p style="font-weight: 600">Custom title</p>
        <p>Any content can go here</p>
      </div>
    </template>
  </bp-tooltip>
</template>

<style lang="scss" scoped>
.custom-content {
  min-width: 120px;

  p {
    margin: 0;
    line-height: 1.8;
  }
}
</style>
