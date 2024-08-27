<template>
  <bp-button :icon="IconSearch2Line" type="normal" status="primary">Search</bp-button>
  <bp-button :icon="IconShareFill" type="plain" status="primary">Share</bp-button>
  <bp-button :icon="IconDeleteBin6Line" type="dashed" status="danger">Confirm Delete</bp-button>
  <bp-button :icon="IconUploadCloud2Line" type="text" status="primary">Upload</bp-button>
</template>

<script setup lang="ts">
import { IconShareFill, IconSearch2Line, IconDeleteBin6Line, IconUploadCloud2Line } from "birdpaper-icon";
</script>
