<template>
  <td :class="cls">
    <span class="bp-table-td-content">
      <template v-if="!hasCustomCell">
        <span>
          {{ record[dataIndex] }}
        </span>
      </template>

      <template v-else>
        <slot name="cell" :record="record" :rowIndex="rowIndex" />
      </template>
    </span>
  </td>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { computed, useSlots } from "vue";
import { TableColumnProps, tableColumnProps } from "../props";

defineOptions({ name: "TableColumn" });
const { clsBlockName } = useNamespace("table-column");

const props: TableColumnProps = defineProps(tableColumnProps);
const slots = useSlots();

const cls = computed<string[]>(() => [clsBlockName]);
const hasCustomCell = computed(() => !!slots?.cell);
</script>
