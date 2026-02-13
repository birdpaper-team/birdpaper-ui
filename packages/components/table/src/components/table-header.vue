<template>
  <thead :class="[clsBlockName]">
    <tr>
      <template v-for="item in list">
        <th :class="thClass(item)">
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

const thClass = (item: ColumnsItem) => {
  return {
    left: "text-align-left!",
    center: "text-align-center!",
    right: "text-align-right!",
  }[item.align || "left"];
};

const selectAllProxy = computed<boolean>({
  get: () => props.selectAll,
  set: (value) => emits("select-all", value),
});

defineExpose({
  selectAllProxy,
});
</script>
