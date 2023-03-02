<!--
 * @ Author: Sam
 * @ Create Time: 2023-02-21 21:05:39
 * @ Modified by: Sam
 * @ Modified time: 2023-03-02 16:00:27
 * @ Description:
 -->

<template>
  <div>
    <bp-button @click="t">常规按钮</bp-button>
    <bp-button type="primary" @click="t">主要按钮</bp-button>
    <bp-button type="plain" @click="t">线框按钮</bp-button>
    <bp-button type="dashed" @click="t">虚线按钮</bp-button>
    <bp-button type="text" @click="t">文本按钮</bp-button>
  </div>
</template>

<script setup lang="ts" name="basic-demo">
const t = () => {
  console.log("[  ]-8");
};
</script>

<style lang="less" scope>
.bp-button{
  margin-right:10px;
  margin-bottom:10px;
}
</style>
