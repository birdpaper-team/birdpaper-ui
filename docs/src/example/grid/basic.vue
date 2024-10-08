<template>
  <div class="demo-row" v-for="row in demoList">
    <bp-row>
      <bp-col v-for="col in row" :span="col">
        <div class="demo">col - {{ col }}</div>
      </bp-col>
    </bp-row>
  </div>
</template>

<script setup lang="ts">
const demoList = [[24], [12, 12], [8, 8, 8], [6, 6, 6, 6], [4, 4, 4, 4, 4, 4]];
</script>

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
