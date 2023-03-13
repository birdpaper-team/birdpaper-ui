<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts" name="col">
import { computed } from 'vue';

const props = defineProps({

});

const name = "col";
const cls = computed(() => {
  return [`bp-${name}`];
});
</script>
