<template>
  <bp-table :data>
    <template #columns>
      <bp-table-column title="名称" data-index="name" width="140">
        <template #cell="{ record }">
          <span class="name-inner font-quick">{{ record.name }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="说明" data-index="remark">
        <template #cell="{ record }">
          <span class="remark-inner">{{ record.remark }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="类型" data-index="type" width="200">
        <template #cell="{ record }">
          <span class="type-inner">{{ record.type }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="默认值" data-index="default">
        <template #cell="{ record }">
          <span class="default-inner">{{ record.default || "-" }}</span>
        </template>
      </bp-table-column>
      <!-- <bp-table-column title="始于" data-index="version">
        <template #cell="{ record }">
          <span class="version-inner">{{ record.version || "-" }}</span>
        </template>
      </bp-table-column> -->
    </template>
  </bp-table>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { PropItem } from "../types";

const props = defineProps({
  data: { type: Array as PropType<PropItem[]>, default: () => [] },
});
</script>
