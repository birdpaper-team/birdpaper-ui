<template>
  <td :class="cls" :style="tdStyle">
    <template v-if="!hasCustomCell && dataIndex">
      {{ dataIndex && record[dataIndex] }}
    </template>

    <template v-else>
      <slot name="cell" :record="record" :rowIndex="rowIndex" />
    </template>
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

const cls = computed<Array<string | false>>(() => [
  clsBlockName,
  `${clsBlockName}-${props.align}`,
  props.fixed === "left" && `${clsBlockName}-fixed-left`,
  props.fixed === "right" && `${clsBlockName}-fixed-right`,
]);

const tdStyle = computed(() => {
  if (!props.fixed) return undefined;

  const style: Record<string, string | number> = {
    position: "sticky",
    zIndex: 3,
    background: "inherit",
  };

  if (props.fixed === "left") style.left = `${props.fixedOffset || 0}px`;
  if (props.fixed === "right") style.right = `${props.fixedOffset || 0}px`;

  return style;
});
const hasCustomCell = computed(() => !!slots?.cell);
</script>
