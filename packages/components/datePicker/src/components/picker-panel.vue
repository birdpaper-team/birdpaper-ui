<template>
  <div :class="clsBlockName">
    <div :class="`${clsBlockName}-wrapper`">
      <component ref="tableRef" :is="tableMap[currentTable]" @change-picker="onChangePicker"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@birdpaper-ui/hooks";
import { inject, PropType, ref, type Component } from "vue";
import dateTable from "./date-table.vue";
import monthTable from "./month-table.vue";
import yearTable from "./year-table.vue";
import rangeTable from "./range-table/index.vue";
import { dateInjectionKey, DatePickerContext, PanelType } from "../types";

defineOptions({ name: "DatePickerPanel" });
const { clsBlockName } = useNamespace("date-picker-panel");

const props = defineProps({
  type: {
    type: String as PropType<PanelType>,
    default: "date",
  },
});

const currentTable = ref<PanelType>(props.type);
const tableMap: Record<PanelType, Component> = {
  date: dateTable,
  month: monthTable,
  year: yearTable,
  range: rangeTable,
};

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);

const tableRef = ref();
const onChangePicker = (typeName: PanelType) => {
  if (props.type === "year") return;
  if (props.type === "month" && typeName === "date") return;

  currentTable.value = typeName;
};
</script>
