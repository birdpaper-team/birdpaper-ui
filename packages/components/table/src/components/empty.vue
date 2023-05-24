<template>
  <tr class="bp-table-empty-tr">
    <td :colspan="colspan">暂无数据</td>
  </tr>
</template>

<script setup lang="ts" name="TableEmpty">
const props = defineProps({
  colspan: { type: Number, default: 0 }
});
</script>
