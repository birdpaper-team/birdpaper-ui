<template>
  <colgroup>
    <col
      v-for="(item, index) in cols"
      :key="`bp-table-tr-${index}`"
      :name="`bp_table_tr_${index}`"
      :style="`width:${item.width}px;min-width:${item.width}px;max-width:${item.width}px`"
    />
  </colgroup>
</template>

<script setup lang="ts" name="TableColumns">
const props = defineProps({
  // TODO
  cols: { type: Array<any>, default: () => [] },
});
</script>
