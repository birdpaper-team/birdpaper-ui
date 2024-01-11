<template>
  <bp-space size="mini">
    <bp-button shape="square" type="plain" status="primary">Square</bp-button>
    <bp-button shape="round" type="plain" status="primary">Round</bp-button>
    <bp-button :icon="IconAddLine" type="plain" shape="round" status="primary"></bp-button>
    <bp-button shape="circle" type="plain" :icon="IconSearch2Line" status="primary"></bp-button>
  </bp-space>
</template>

<script setup lang="ts">
import { IconAddLine, IconSearch2Line } from "birdpaper-icon";
</script>
