<template>
  <div class="demo-row">
    <bp-row>
      <bp-col :xs="24" :sm="20" :md="16" :lg="10" :xl="8">
        <div class="demo">xs=24 sm=20 md=16 lg=10 xl=6</div>
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
    text-align: center;
  }

  .bp-col:nth-child(2n) {
    .demo {
      background-color: #4096ff;
    }
  }

  .bp-col:nth-child(2n + 1) {
    .demo {
      background-color: #1677ff;
    }
  }
}
</style>
