<template>
  <div :class="clsBlockName">
    <table-header>
      <template #inner>
        <span @click.stop="handleChangePicker('year')" v-text="currentYear" />
      </template>
      <template #option>
        <component v-for="v in options" :is="v.icon" size="22" @click="handleChange(v.type)" />
      </template>
    </table-header>

    <div :class="`${clsBlockName}-body`">
      <div v-for="col in monthCell" :class="cellCls(col)" @click.stop="handleSelect(col)">
        <span :class="[`${clsBlockName}-month-cell-inner`]">{{ col.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref, inject } from "vue";
import type { Component } from "vue";
import dayjs from "dayjs";
import { DatePickerContext, MonthCell, PanelType, dateInjectionKey } from "../types";
import tableHeader from "./table-header.vue";
import { useDayJs } from "../core";
import { IconArrowLeftDoubleFill, IconArrowRightDoubleFill } from "birdpaper-icon";

defineOptions({ name: "MonthTable" });
const { clsBlockName } = useNamespace("month-table");

const emits = defineEmits(["change-picker"]);

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);
const cellCls = (cell: MonthCell) => [
  `${clsBlockName.value}-month-cell`,
  { active: !!ctx.value!.model && currentVal.value === cell.value },
  { "to-month": cell.value === `${dayjs(toDay.value).year()}-${dayjs(toDay.value).month() + 1}` },
];

const { toDay, current, currentYear, monthCell, setMonthCell, changeYear } = useDayJs(
  ctx.value!.langs,
  ctx.value!.model
);
const currentVal = ref(current.value && current.value.format(ctx.value!.valueFormat));
setMonthCell();

const options: { icon: Component; type: "prev" | "next" }[] = [
  { icon: IconArrowLeftDoubleFill, type: "prev" },
  { icon: IconArrowRightDoubleFill, type: "next" },
];
const handleChange = (type: "prev" | "next", step: number = 1) => {
  let val = currentYear.value;
  val = type === "next" ? val + step : val - step;
  changeYear(val);
  setMonthCell();
};

const handleSelect = (date: MonthCell) => {
  currentVal.value = date.value;
  ctx.value?.onSelect(currentVal.value, {}, false);
  emits("change-picker", "date");
};

const handleChangePicker = (typeName: PanelType) => {
  emits("change-picker", typeName, currentYear.value);
};
</script>
