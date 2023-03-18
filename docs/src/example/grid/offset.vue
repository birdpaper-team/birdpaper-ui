<template>
  <div class="demo-row">
    <bp-row>
      <bp-col :span="4">
        <div class="demo">col - 4</div>
      </bp-col>
      <bp-col :span="10" :offset="10">
        <div class="demo">offset - 10 & col - 10</div>
      </bp-col>
    </bp-row>
  </div>

  <div class="demo-row">
    <bp-row>
      <bp-col :span="12" :offset="6">
        <div class="demo">offset - 6 & col - 12</div>
      </bp-col>
    </bp-row>
  </div>
</template>

<style lang="less" scoped>
.demo-row {
  background-color: #f0f0f0;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

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
