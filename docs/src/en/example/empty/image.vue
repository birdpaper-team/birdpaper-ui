<template>
  <bp-space :size="40">
    <bp-empty>
      <template #image>
        <IconSearchLine size="36" style="color: #c9cdd4" />
      </template>
    </bp-empty>
    <bp-empty content="No favorites">
      <template #image>
        <IconHeartLine size="36" style="color: #c9cdd4" />
      </template>
    </bp-empty>
  </bp-space>
</template>

<script setup lang="ts">
import { IconSearchLine, IconHeartLine } from "birdpaper-icon";
</script>
