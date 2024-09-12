<template>
  <div :class="cls" ref="bpTable">
    <div :class="`${clsBlockName}-body-area`">
      <div class="scrollbar"></div>

      <table :class="`${clsBlockName}-body`">
        <table-header :list="columns"></table-header>

        <tbody :class="`${clsBlockName}-body-tbody`" v-if="isEmpty">
          <tr>
            <td :colspan="columns.length">
              <slot name="empty"></slot>
              <div :class="`${clsBlockName}-body-tbody-empty`" v-if="!slots.empty?.()">
                <IconInbox2Line size="24px" />
                {{ emptyText }}
              </div>
            </td>
          </tr>
        </tbody>

        <table-body v-else :data="data" :row-key="rowKey">
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
import { computed, nextTick, onMounted, useSlots } from "vue";

defineOptions({ name: "Table" });
const { clsBlockName } = useNamespace("table");

const props: TableProps = defineProps(tableProps);
const slots = useSlots();
const { bpTable, columns, getColumnsBySlot, resetColumns, initColumnsWidth } = useTableCore();

const init = () => {
  getColumnsBySlot();

  resetColumns();
  initColumnsWidth();
};
const isEmpty = computed<boolean>(() => props.data.length === 0);

onMounted(() => {
  nextTick(() => init());
});

const cls = computed<string[] | {}[]>(() => [clsBlockName, props.border && `${clsBlockName}-border`, props.stripe && `${clsBlockName}-stripe`]);
</script>
