<template>
  <div :class="clsBlockName">
    <component :is="icon" class="spin-icon" size="18"></component>
    <span v-if="description" :class="`${clsBlockName}-text`">{{ description }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@birdpaper-ui/hooks';
import { PropType } from 'vue';
import type { Component } from 'vue';

const { clsBlockName } = useNamespace("spin-spinner");

const props = defineProps({
  icon: {
    type: Object as PropType<Component>,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
