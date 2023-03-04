<template>
  <div>
    <bp-button @click="t">常规按钮</bp-button>
    <bp-button type="primary" @click="t">主要按钮</bp-button>
    <bp-button type="plain" @click="t">线框按钮</bp-button>
    <bp-button type="dashed" @click="t">虚线按钮</bp-button>
    <bp-button type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button status="primary" @click="t">常规按钮</bp-button>
    <bp-button status="primary" type="primary" @click="t">主要按钮</bp-button>
    <bp-button status="primary" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="primary" type="dashed" @click="t">虚线按钮</bp-button>
    <bp-button status="primary" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button status="success" @click="t">常规按钮</bp-button>
    <bp-button status="success" type="primary" @click="t">主要按钮</bp-button>
    <bp-button status="success" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="success" type="dashed" @click="t">虚线按钮</bp-button>
    <bp-button status="success" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button status="warning" @click="t">常规按钮</bp-button>
    <bp-button status="warning" type="primary" @click="t">主要按钮</bp-button>
    <bp-button status="warning" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="warning" type="dashed" @click="t">虚线按钮</bp-button>
    <bp-button status="warning" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button status="danger" @click="t">常规按钮</bp-button>
    <bp-button status="danger" type="primary" @click="t">主要按钮</bp-button>
    <bp-button status="danger" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="danger" type="dashed" @click="t">虚线按钮</bp-button>
    <bp-button status="danger" type="text" @click="t">文本按钮</bp-button>
  </div>
</template>

<script setup lang="ts" name="basic-demo">
const t = () => {
  console.log("[  ]-8");
};
</script>

<style lang="less" scope>
.bp-btn{
  margin-right:10px;
  margin-bottom:10px;
}
</style>
