<template>
  <bp-space>
    <bp-tag :icon="IconCheckLine" status="success">Success</bp-tag>
    <bp-tag :icon="IconCloseCircleLine" status="danger">Failed</bp-tag>
    <bp-tag :icon="IconErrorWarningLine" status="warning">Warning</bp-tag>
    <bp-tag :icon="IconInformationLine" status="primary">Info</bp-tag>
  </bp-space>
</template>

<script setup lang="ts">
import { IconCheckLine, IconCloseCircleLine, IconErrorWarningLine, IconInformationLine } from "birdpaper-icon";
</script>
