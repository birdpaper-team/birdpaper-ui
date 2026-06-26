<template>
  <thead :class="[clsBlockName]">
    <tr>
      <template v-for="(item, index) in list" :key="item.dataIndex || item.title || index">
        <th :class="thClass(item, index)" :style="thStyle(index)">
          <template v-if="item.type === 'checkbox'">
            <bp-checkbox v-model:check="selectAllProxy" :indeterminate="props.indeterminate"></bp-checkbox>
          </template>
          <template v-else>
            {{ item.title }}
          </template>
        </th>
      </template>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import BpCheckbox from "@birdpaper-ui/components/checkbox/index";
import { ColumnsItem } from "../types";
import { tableHeaderProps, TableHeaderProps } from "../props";
import { computed } from "vue";

defineOptions({ name: "TableHeader" });
const { clsBlockName } = useNamespace("table-header-thead");

const props: TableHeaderProps = defineProps(tableHeaderProps);
const emits = defineEmits<{
  (e: "select-all", value: boolean): void;
}>();

const thClass = (item: ColumnsItem, index: number) => {
  const alignClass = {
    left: "text-align-left!",
    center: "text-align-center!",
    right: "text-align-right!",
  }[item.align || "left"];

  const fixed = props.cols[index]?.fixed;
  return [
    alignClass,
    fixed === "left" && `${clsBlockName.value}-fixed-left`,
    fixed === "right" && `${clsBlockName.value}-fixed-right`,
  ];
};

const thStyle = (index: number) => {
  const column = props.cols[index] as any;
  if (!column?.fixed) return undefined;

  const style: Record<string, string | number> = {
    position: "sticky",
    zIndex: 4,
    background: "var(--bp-gray-1)",
  };

  if (column.fixed === "left") style.left = `${column.fixedOffset || 0}px`;
  if (column.fixed === "right") style.right = `${column.fixedOffset || 0}px`;

  return style;
};

const selectAllProxy = computed<boolean>({
  get: () => props.selectAll,
  set: (value) => emits("select-all", value),
});

defineExpose({
  selectAllProxy,
});
</script>
