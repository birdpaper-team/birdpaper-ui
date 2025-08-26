<template>
  <colgroup>
    <col
      v-for="col in columns"
      :key="col.key"
      :style="{ width: col.realWidth + 'px' }"
    />
    <col v-if="gutterWidth > 0" :style="{ width: gutterWidth + 'px' }" />
  </colgroup>
</template>

<script lang="ts" setup>
import type { NormalizedColumn } from '../core';

const props = defineProps<{
  columns: NormalizedColumn[];
  gutterWidth?: number;
}>();

const gutterWidth = props.gutterWidth ?? 0;
</script>