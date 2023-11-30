<template>
  <bp-space size="mini">
    <bp-button :icon="IconSearch2Line" type="primary" status="primary">搜索</bp-button>
    <bp-button :icon="IconShareFill" type="plain" status="primary">分享</bp-button>
    <bp-button :icon="IconDeleteBin6Line" type="dashed" status="danger">确认删除</bp-button>
    <bp-button :icon="IconUploadCloud2Line" type="text" status="primary">选择文件</bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { IconShareFill, IconSearch2Line, IconDeleteBin6Line, IconUploadCloud2Line } from "birdpaper-icon";
</script>