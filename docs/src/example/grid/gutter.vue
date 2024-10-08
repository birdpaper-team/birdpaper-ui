<template>
  <div class="demo-row">
    <bp-row :gutter="10">
      <bp-col :span="4">
        <div class="demo">col - 4</div>
      </bp-col>
      <bp-col :span="6">
        <div class="demo">col - 6</div>
      </bp-col>
      <bp-col :span="8">
        <div class="demo">col - 8</div>
      </bp-col>
      <bp-col :span="6">
        <div class="demo">col - 6</div>
      </bp-col>
    </bp-row>
  </div>
</template>

<style lang="less" scoped>
.demo-row {
  background-color: #f0f0f0;

  .demo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    color: #fff;
    font-size: 12px;
    background-color: #1677ff;
    text-align: center;
  }
}
</style>
