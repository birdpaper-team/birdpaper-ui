<template>
  <div>
    <bp-button @click="t">常规</bp-button>
    <bp-button shape="round" type="primary" @click="t">主要按钮</bp-button>
    <bp-button type="plain" @click="t">线框按钮</bp-button>
    <bp-button type="dashed" @click="t">虚线</bp-button>
    <bp-button type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button status="primary" @click="t">常规</bp-button>
    <bp-button status="primary" type="primary" @click="t">主要按钮</bp-button>
    <bp-button shape="round" status="primary" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="primary" type="dashed" @click="t">虚线</bp-button>
    <bp-button status="primary" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button status="success" @click="t">常规</bp-button>
    <bp-button status="success" type="primary" @click="t">主要按钮</bp-button>
    <bp-button status="success" type="plain" @click="t">线框按钮</bp-button>
    <bp-button shape="round" status="success" type="dashed" @click="t">虚线</bp-button>
    <bp-button status="success" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button shape="round" status="warning" @click="t">常规</bp-button>
    <bp-button status="warning" type="primary" @click="t">主要按钮</bp-button>
    <bp-button status="warning" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="warning" type="dashed" @click="t">虚线</bp-button>
    <bp-button status="warning" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button size="mini" status="danger" @click="t">常规</bp-button>
    <bp-button size="mini" status="danger" type="primary" @click="t">主要按钮</bp-button>
    <bp-button size="mini" status="danger" type="plain" @click="t">线框按钮</bp-button>
    <bp-button size="mini" status="danger" type="dashed" @click="t">虚线</bp-button>
    <bp-button size="mini" status="danger" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button size="small" status="danger" @click="t">常规</bp-button>
    <bp-button size="small" status="danger" type="primary" @click="t">主要按钮</bp-button>
    <bp-button size="small" status="danger" type="plain" @click="t">线框按钮</bp-button>
    <bp-button size="small" status="danger" type="dashed" @click="t">虚线</bp-button>
    <bp-button size="small" status="danger" type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button size="large" status="danger" @click="t">常规</bp-button>
    <bp-button size="large" status="danger" type="primary" @click="t">主要按钮</bp-button>
    <bp-button size="large" status="danger" type="plain" @click="t">线框按钮</bp-button>
    <bp-button size="large" status="danger" type="dashed" @click="t">虚线</bp-button>
    <bp-button size="large" status="danger" type="text" @click="t">文本按钮</bp-button>
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
