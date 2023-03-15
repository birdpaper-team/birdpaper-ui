<template>
  <div class="demo-row">
    <bp-row>
      <bp-col span="4" class="demo"></bp-col>
      <bp-col span="6" class="demo"></bp-col>
      <bp-col span="6" class="demo"></bp-col>
      <bp-col span="8" class="demo"></bp-col>
    </bp-row>
  </div>
  <div class="demo-row">
    <bp-row>
      <bp-col span="6" offset="2" class="demo"></bp-col>
      <bp-col span="8" offset="3" class="demo"></bp-col>
    </bp-row>
  </div>
</template>

<style lang="less" scoped>
.demo-row {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .demo {
    border-radius: 4px;
    background-color: #449efb;
    height: 30px;
  }
}
</style>
