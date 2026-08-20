<template>
  <bp-button :icon="IconSearch2Line" type="normal" status="primary">Search</bp-button>
  <bp-button :icon="IconDeleteBin6Line" type="plain" status="danger">Confirm delete</bp-button>
  <bp-button :icon="IconShareFill" type="plain" status="primary"></bp-button>
  <bp-button :icon="IconUploadCloud2Line" type="text" status="primary">Upload</bp-button>
</template>

<script setup lang="ts">
import { IconShareFill, IconSearch2Line, IconDeleteBin6Line, IconUploadCloud2Line } from "birdpaper-icon";
</script>
