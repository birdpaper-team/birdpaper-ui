<template>
  <tr class="bp-table-empty-tr">
    <td :colspan="colspan">
      <div class="bp-table-empty-tr-inner">
        <i class="ri-inbox-2-line"></i>
        <span>暂无数据</span>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts" name="TableEmpty">
const props = defineProps({
  colspan: { type: Number, default: 0 }
});
</script>
