<template>
  <bp-tooltip>
    <bp-button>自定义内容</bp-button>
    <template #content>
      <div class="custom-content">
        <p style="font-weight: 600">自定义标题</p>
        <p>这里可以放任意内容</p>
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
