<template>
  <bp-table :data>
    <template #columns>
      <bp-table-column :title="locales[lang].METHOD_TABLE.NAME" data-index="name" width="140">
        <template #cell="{ record }">
          <span class="name-inner font-quick copy-column" @click="doCopy(record.name)">
            {{ record.name }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].METHOD_TABLE.REMARK" data-index="remark" width="200">
        <template #cell="{ record }">
          <span class="remark-inner">{{ lang === "en" ? record.remarkEn || record.remark : record.remark }}</span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].METHOD_TABLE.PARAMS" data-index="params" width="200">
        <template #cell="{ record }">
          <span class="params-inner">
            {{ record.params || "-" }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].METHOD_TABLE.RETURNS" data-index="returns" width="200">
        <template #cell="{ record }">
          <span class="returns-inner">
            {{ record.returns || "-" }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].METHOD_TABLE.VERSION" data-index="version">
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
import { locales } from "../../../locales";

const props = defineProps({
  data: { type: Array as PropType<SlotItem[]>, default: () => [] },
  lang: { type: String as PropType<"zh-CN" | "en">, default: "zh-CN" },
});

const emits = defineEmits<{
  (e: "copy", data: string): void;
}>();

const doCopy = (text: string) => emits("copy", text);
</script>
