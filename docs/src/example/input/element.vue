<template>
  <bp-space>
    <bp-input placeholder="请输入手机号">
      <template #prefix> +86 </template>
    </bp-input>
    <bp-input clearable placeholder="请输入内容">
      <template #suffix>
        <IconSearch2Line />
      </template>
    </bp-input>
  </bp-space>
</template>

<script setup lang="ts">
import { IconSearch2Line } from "birdpaper-icon";
</script>
