<template>
  <tr class="bp-table-empty-tr">
    <td :colspan="colspan">暂无数据</td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  colspan: { type: Number, default: 0 }
});
</script>

<script>
export default { name: "bp-table-empty" }
</script>