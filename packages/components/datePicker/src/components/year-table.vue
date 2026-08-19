<template>
  <div :class="clsBlockName">
    <table-header :inner-allow-click="false">
      <template #inner>
        <span> {{ firstYear + 1 }} - {{ firstYear + 12 }}</span>
      </template>
      <template #option>
        <component v-for="v in options" :is="v.icon" size="22" @click="handleChange(v.type)" />
      </template>
    </table-header>

    <div :class="`${clsBlockName}-body`">
      <div v-for="col in yearCell" :class="cellCls(col)" @click.stop="handleSelect(col)">
        <span :class="[`${clsBlockName}-year-cell-inner`]">{{ col.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from "@birdpaper-ui/hooks";
import { ref, inject } from "vue";
import type { Component } from "vue";
import { DatePickerContext, YearCell, dateInjectionKey } from "../types";
import dayjs from "dayjs";
import tableHeader from "./table-header.vue";
import { useDayJs } from "../core";
import { IconArrowLeftDoubleFill, IconArrowRightDoubleFill } from "birdpaper-icon";

defineOptions({ name: "YearTable" });
const { clsBlockName } = useNamespace("year-table");
const emits = defineEmits(["change-picker"]);

const ctx = ref<DatePickerContext>();
ctx.value = inject(dateInjectionKey, undefined);

const cellCls = (cell: YearCell) => [
  `${clsBlockName.value}-year-cell`,
  { active: !!ctx.value!.model && currentVal.value === cell.label },
  { "to-year": dayjs(toDay.value).year() === cell.value },
];

const displayModel = ctx.value!.panelValue || ctx.value!.model;
const { toDay, firstYear, yearCell, setYearCell } = useDayJs(ctx.value!.langs, displayModel);
const currentVal = ref(ctx.value!.model ? dayjs(ctx.value!.model).format("YYYY") : "");

setYearCell();

const options: { icon: Component; type: "prev" | "next" }[] = [
  { icon: IconArrowLeftDoubleFill, type: "prev" },
  { icon: IconArrowRightDoubleFill, type: "next" },
];
const handleChange = (type: "prev" | "next", step: number = 12) => {
  let val = firstYear.value;
  firstYear.value = type === "next" ? val + step : val - step;
  setYearCell();
};

const handleSelect = (date: YearCell) => {
  const val = date.value.toString();
  currentVal.value = val;

  if (ctx.value!.type === "year") {
    const formatted = dayjs(val).format(ctx.value!.valueFormat);
    ctx.value!.onSelect(formatted, {}, true);
    return;
  }

  ctx.value!.setPanelValue?.(val);
  emits("change-picker", "month");
};
</script>
