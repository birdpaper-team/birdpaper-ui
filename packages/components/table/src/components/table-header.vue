<template>
  <col-group :cols="list"></col-group>

  <thead :class="[clsBlockName, 'select-none']">
    <tr>
      <template v-for="item in list">
        <th :class="thClass(item)">
          {{ item.title }}
        </th>
      </template>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import ColGroup from "./col-group.vue";
import { ColumnsItem } from "../types";
import { tableHeaderProps, TableHeaderProps } from "../props";

defineOptions({ name: "TableHeader" });
const { clsBlockName } = useNamespace("table-header-thead");

const props: TableHeaderProps = defineProps(tableHeaderProps);

const thClass = (item: ColumnsItem) => {
  return [`text-${item.align || "left"}`];
};
</script>
