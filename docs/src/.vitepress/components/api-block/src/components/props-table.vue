<template>
  <bp-table :data>
    <template #columns>
      <bp-table-column :title="locales[lang].PROPS_TABLE.NAME" data-index="name" minWidth="180">
        <template #cell="{ record }">
          <span class="name-inner font-quick copy-column" @click="doCopy(record.name)">
            {{ record.name }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].PROPS_TABLE.REMARK" data-index="remark" width="200">
        <template #cell="{ record }">
          <span class="remark-inner">{{ lang === "en" ? record.remarkEn || record.remark : record.remark }}</span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].PROPS_TABLE.TYPE" data-index="type" width="200">
        <template #cell="{ record }">
          <div class="type-inner-wrap">
            <span class="type-inner" v-for="v in record.type">
              {{ v }}
            </span>
            <bp-tooltip v-if="record.optional" :content="record.optional.join(' | ')">
              <span class="icon-wrap">
                <IconInformationLine size="14" />
              </span>
            </bp-tooltip>
          </div>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].PROPS_TABLE.DEFAULT" data-index="default" minWidth="120">
        <template #cell="{ record }">
          <span class="default-inner">
            {{ record.default || "-" }}
          </span>
        </template>
      </bp-table-column>
      <bp-table-column :title="locales[lang].PROPS_TABLE.VERSION" data-index="version">
        <template #cell="{ record }">
          <span class="version-inner">{{ record.version || "-" }}</span>
        </template>
      </bp-table-column>
    </template>
  </bp-table>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IconInformationLine } from "birdpaper-icon";
import { PropItem } from "../types";
import { locales } from "../../../locales";

const props = defineProps({
  data: { type: Array as PropType<PropItem[]>, default: () => [] },
  lang: { type: String as PropType<"zh-CN" | "en">, default: "zh-CN" },
});

const emits = defineEmits<{
  (e: "copy", data: string): void;
}>();

const doCopy = (text: string) => emits("copy", text);
</script>
