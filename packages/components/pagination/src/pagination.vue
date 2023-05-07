<template>
  <div :class="name">
    <div :class="`${name}-item`">
      <i class="ri-arrow-left-s-line"></i>
    </div>
    <div :class="`${name}-item`">
      <i class="ri-arrow-right-s-line"></i>
    </div>
  </div>
</template>

<script setup lang="ts" name="Pagination">
const props = defineProps({

});

const name = "bp-pagination";
</script>
