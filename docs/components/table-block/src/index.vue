<template>
  <bp-table :cols="header[type]" :data-source="list">
    <template #type="{ row }">
    <span style="font-weight:bold">{{ row.type || "-" }}</span>
  </template>
  </bp-table>
</template>

<script setup lang="ts" name="table-block">
import { onMounted, ref } from "vue";
import { EventTableItem, header, MethodTableItem, PropTableItem, SlotTableItem } from "./tableBlock";

const props = defineProps({
  type: { type: String, default: "props" },
  src: { type: String, default: "" },
});
const list = ref<PropTableItem[] | EventTableItem[] | MethodTableItem[] | SlotTableItem[]>([]);

const init = async () => {
  if (!props.src) return;

  const dataGlob = import.meta.glob(`../../../src/example/**/*.ts`);
  const res = await import(dataGlob[`../../../src/${props.src}.ts`].name);
  list.value = res.default;
};

onMounted(() => init());
</script>
