<template>
  <bp-space>
    <bp-tag :icon="IconCheckLine" status="success">成功</bp-tag>
    <bp-tag :icon="IconCloseCircleLine" status="danger">失败</bp-tag>
    <bp-tag :icon="IconErrorWarningLine" status="warning">警告</bp-tag>
    <bp-tag :icon="IconInformationLine" status="primary">信息</bp-tag>
  </bp-space>
</template>

<script setup lang="ts">
import { IconCheckLine, IconCloseCircleLine, IconErrorWarningLine, IconInformationLine } from "birdpaper-icon";
</script>
