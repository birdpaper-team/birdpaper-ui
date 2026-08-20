<template>
  <bp-space>
    <bp-link :icon="IconSearchLine">Search</bp-link>
    <bp-link :icon="IconDownloadLine" status="success">Download</bp-link>
    <bp-link href="https://github.com" target="_blank" :icon="IconExternalLinkLine">GitHub</bp-link>
  </bp-space>
</template>

<script setup lang="ts">
import { IconSearchLine, IconDownloadLine, IconExternalLinkLine } from "birdpaper-icon";
</script>
