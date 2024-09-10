<template>
  <div :class="cls" ref="tableRef">
    <div class="bp-table-body-area">
      <!-- <div class="scrollbar"></div> -->

      <table :class="`${clsBlockName}-body`">
        <table-header></table-header>
        <table-body :data="data" :row-key="rowKey">
          <slot name="columns"> </slot>
        </table-body>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useNamespace } from "@birdpaper-ui/hooks";
import { TableProps, tableProps } from "./props";
import tableHeader from "./components/table-header.vue";
import TableBody from "./components/table-body";

defineOptions({ name: "Table" });
const { clsBlockName } = useNamespace("table");

const props: TableProps = defineProps(tableProps);

const tableRef = ref<HTMLElement>();
const cls = computed<string[]>(() => [clsBlockName]);
</script>
