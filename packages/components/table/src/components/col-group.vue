<template>
  <colgroup>
    <col
      v-for="(item, index) in cols"
      :key="`bp-table-tr-${index}`"
      :name="`bp_table_tr_${index}`"
      :width="item.width"
    />
  </colgroup>
</template>

<script setup lang="ts" name="TableColumns">
const props = defineProps({
  // TODO
  cols: { type: Array<any>, default: () => [] },
});
</script>
