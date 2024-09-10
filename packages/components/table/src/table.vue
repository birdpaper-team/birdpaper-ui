<template>
  <div :class="cls" ref="bpTable">
    <div class="bp-table-body-area">
      <div class="scrollbar"></div>

      <table :class="`${clsBlockName}-body`">
        <table-header :list="columns"></table-header>
        <table-body :data="data" :row-key="rowKey">
          <slot name="columns"> </slot>
        </table-body>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { TableProps, tableProps } from "./props";
import tableHeader from "./components/table-header.vue";
import tableBody from "./components/table-body.jsx";
import { useTableCore } from "./core";
import { computed, nextTick, onMounted } from "vue";

defineOptions({ name: "Table" });
const { clsBlockName } = useNamespace("table");

const props: TableProps = defineProps(tableProps);
const { bpTable, columns, getColumnsBySlot, resetColumns, initColumnsWidth } = useTableCore();

const init = () => {
  getColumnsBySlot();

  resetColumns();
  initColumnsWidth();
};

onMounted(() => {
  nextTick(() => init());
});

const cls = computed<string[]>(() => [clsBlockName]);
</script>
