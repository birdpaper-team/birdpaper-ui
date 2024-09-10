<template>
  <colgroup>
    <col v-for="(item, index) in cols" :key="`table-tr-${index}`" :name="`table_tr_${index}`" :width="item.width" />
  </colgroup>
</template>

<script setup lang="ts">
defineOptions({ name: "TableColGroup" });

const props = defineProps({
  cols: { type: Array<any>, default: () => [] },
});
</script>
