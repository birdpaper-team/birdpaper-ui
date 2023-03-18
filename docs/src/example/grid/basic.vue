<template>
  <div class="demo-row">
    <bp-row>
      <bp-col span="24">
        <div class="demo">col - 24</div>
      </bp-col>
    </bp-row>
  </div>

  <div class="demo-row">
    <bp-row :gutter="6">
      <bp-col span="12">
        <div class="demo">col - 12</div>
      </bp-col>
      <bp-col span="12">
        <div class="demo">col - 12</div>
      </bp-col>
    </bp-row>
  </div>

  <div class="demo-row">
    <bp-row :gutter="6">
      <bp-col span="8">
        <div class="demo">col - 8</div>
      </bp-col>
      <bp-col span="8">
        <div class="demo">col - 8</div>
      </bp-col>
      <bp-col span="8">
        <div class="demo">col - 8</div>
      </bp-col>
    </bp-row>
  </div>

  <div class="demo-row">
    <bp-row :gutter="6">
      <bp-col span="6">
        <div class="demo">col - 6</div>
      </bp-col>
      <bp-col span="6">
        <div class="demo">col - 6</div>
      </bp-col>
      <bp-col span="6">
        <div class="demo">col - 6</div>
      </bp-col>
      <bp-col span="6">
        <div class="demo">col - 6</div>
      </bp-col>
    </bp-row>
  </div>
</template>

<style lang="less" scoped>
.demo-row {
  border-radius: 4px;
  background-color: #f0f0f0;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
  .demo {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #449efb;
    height: 36px;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
}
</style>
