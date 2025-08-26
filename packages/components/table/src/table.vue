<template>
  <div :class="cls" ref="bpTable">
    <bp-spin :spinning="loading" :spinIcon :description>
      <div :class="`${clsBlockName}-body-area`">
        <div class="scrollbar"></div>

        <table :class="`${clsBlockName}-body`">
          <table-header ref="tableHeaderRef" :list="columns" @select-all="onSelectAll"></table-header>

          <tbody :class="`${clsBlockName}-body-tbody`" v-if="isEmpty">
            <tr>
              <td :colspan="columns.length">
                <slot name="empty"></slot>
                <div :class="`${clsBlockName}-body-tbody-empty`" v-if="!slots.empty?.({})">
                  <bp-empty :content="emptyText"></bp-empty>
                </div>
              </td>
            </tr>
          </tbody>

          <table-body v-else :data="data" :row-key="rowKey" :cols="columns" :height>
            <table-column align="center" v-if="!!rowSelection">
              <template #cell="{ record }">
                <bp-checkbox
                  v-if="rowSelection?.type === 'checkbox'"
                  v-model="selectedKeys as CheckboxValueForArray[]"
                  :value="record[rowKey]"
                  @change="onCkbChange(record[rowKey], record)"
                ></bp-checkbox>
                <bp-radio v-else v-model="selectedKey" :value="record[rowKey]"></bp-radio>
              </template>
            </table-column>
            <slot name="columns"> </slot>
          </table-body>
        </table>
      </div>
    </bp-spin>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { TableProps, tableProps } from "./props";
import BpEmpty from "@birdpaper-ui/components/empty/index";
import BpCheckbox, { CheckboxValueForArray } from "@birdpaper-ui/components/checkbox/index";
import BpRadio, { RadioValue } from "@birdpaper-ui/components/radio/index";
import BpSpin from "@birdpaper-ui/components/spin/index";
import tableHeader from "./components/table-header.vue";
import tableColumn from "./components/table-column.vue";
import tableBody from "./components/table-body.jsx";
import { useTableCore } from "./core";
import { computed, nextTick, onMounted, useSlots } from "vue";

defineOptions({ name: "Table" });
const { clsBlockName } = useNamespace("table");

const selectedKey = defineModel<RadioValue>("selectedKey", { default: "" });
const selectedKeys = defineModel<CheckboxValueForArray[]>("selectedKeys", { default: [] });
const props: TableProps = defineProps(tableProps);
const emits = defineEmits<{
  (e: "select-all", val: boolean): void;
  (e: "select", val: CheckboxValueForArray[], rowKey: RadioValue, record: any): void;
  (e: "selection-change", val: CheckboxValueForArray[]): void;
}>();
const slots = useSlots();
const { bpTable, columns, getColumnsBySlot, resetColumns, initColumnsWidth } = useTableCore();

const init = () => {
  getColumnsBySlot(props.rowSelection);

  resetColumns();
  initColumnsWidth();
};
const isEmpty = computed<boolean>(() => props.data.length === 0);

const onSelectAll = (val: boolean) => {
  selectedKeys.value = [];

  if (val) {
    selectedKeys.value = props.data.map((item: any) => item[props.rowKey]);
  }
  emits("select-all", val);
};

const onCkbChange = (rowKey: string | number, record: any) => {
  emits("select", selectedKeys.value, rowKey, record);
  emits("selection-change", selectedKeys.value);
};

onMounted(() => {
  nextTick(() => init());
});

const cls = computed<string[] | {}[]>(() => [
  clsBlockName,
  props.border && `${clsBlockName}-border`,
  props.stripe && `${clsBlockName}-stripe`,
]);
</script>
