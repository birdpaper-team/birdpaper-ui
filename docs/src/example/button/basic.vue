<template>
  <div>
    <bp-button @click="t">常规</bp-button>
    <bp-button shape="round" type="primary" @click="t">主要按钮</bp-button>
    <bp-button type="plain" @click="t">线框按钮</bp-button>
    <bp-button type="dashed" @click="t">虚线</bp-button>
    <bp-button type="text" @click="t">文本按钮</bp-button>
  </div>
  <div>
    <bp-button icon="ri-search-2-line" status="primary" @click="t">常规</bp-button>
    <!-- <bp-button disabled status="primary" @click="t">常规</bp-button> -->
    <bp-button :loading="loading" status="primary" @click="t">常规</bp-button>
    <!-- <bp-button icon="ri-search-2-line" :loading="loading" status="primary" @click="t">常规</bp-button> -->
    <bp-button status="primary" type="primary" @click="t">主要按钮</bp-button>
    <bp-button shape="round" status="primary" type="plain" @click="t">线框按钮</bp-button>
    <bp-button status="primary" type="dashed" @click="t">虚线</bp-button>
    <bp-button status="primary" type="text" @click="t">文本按钮</bp-button>
  </div>
</template>

<script setup lang="ts" name="basic-demo">
import { ref } from "vue";

const t = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const loading = ref(false);
</script>

<style lang="less" scope>
.bp-btn {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
