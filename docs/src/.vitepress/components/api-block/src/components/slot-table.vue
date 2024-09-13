<template>
  <bp-table :data>
    <template #columns>
      <bp-table-column title="名称" data-index="name" width="140">
        <template #cell="{ record }">
          <span class="name-inner font-quick copy-column" @click="doCopy(record.name)">
            {{ record.name }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column title="说明" data-index="remark" width="200">
        <template #cell="{ record }">
          <span class="remark-inner">{{ record.remark }}</span>
        </template>
      </bp-table-column>
      <bp-table-column title="参数" data-index="params">
        <template #cell="{ record }">
          <span class="params-inner">
            {{ record.params || "-" }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column title="始于" data-index="version">
        <template #cell="{ record }">
          <span class="version-inner">{{ record.version || "-" }}</span>
        </template>
      </bp-table-column>
    </template>
  </bp-table>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { SlotItem } from "../types";

const props = defineProps({
  data: { type: Array as PropType<SlotItem[]>, default: () => [] },
});

const emits = defineEmits<{
  (e: "copy", data: string): void;
}>();

const doCopy = (text: string) => emits("copy", text);
</script>
