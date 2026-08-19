<template>
  <colgroup>
    <col
      v-for="col in columns"
      :key="col.key"
      :style="{ width: col.realWidth + 'px' }"
    />
    <col v-if="resolvedGutterWidth > 0" :style="{ width: resolvedGutterWidth + 'px' }" />
  </colgroup>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { NormalizedColumn } from "../core";

const props = defineProps<{
  columns: NormalizedColumn[];
  gutterWidth?: number;
}>();

const resolvedGutterWidth = computed(() => props.gutterWidth ?? 0);
</script>
