<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">
        <span :class="`${name}-header-inner-year`" @click.stop="handleChangePicker(PanelType.Year, currentYear)">
          {{ currentYear }}
        </span>
        <span :class="`${name}-header-inner-month`" @click.stop="handleChangePicker(PanelType.Month, currentMonth)">
          {{ months[currentMonth] }}
        </span>
      </div>
      <div :class="`${name}-header-option`">
        <IconArrowLeftDoubleFill @click="handleChange('year', 'prev')" size="20px" />
        <IconArrowLeftSLine @click="handleChange('month', 'prev')" size="20px" />
        <IconArrowRightSLine @click="handleChange('month', 'next')" size="20px" />
        <IconArrowRightDoubleFill @click="handleChange('year', 'next')" size="20px" />
      </div>
    </div>
    <div :class="`${name}-week`">
      <span :class="`${name}-week-inner`" v-for="v in weeks">{{ v }}</span>
    </div>
    <div :class="`${name}-body`">
      <div :class="`${name}-body-row`" v-for="row in dates">
        <span
          v-for="col in row"
          :class="[
            `${name}-body-inner`,
            `day-cell-${col.type}`,
            { active: currentVal === col.value },
            { 'to-day': currentVal !== col.value && col.value === toDay.format(ctx.valueFormat) },
          ]"
          @click="handleSelect(col)"
        >
          {{ col.label }}
        </span>
      </div>
    </div>
    <div :class="`${name}-footer`">
      <bp-button type="text" status="primary" @click="handleSelect({ value: toDay.format(ctx.valueFormat) })">
        今天
      </bp-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";
import { DatePickerContext, DayCell, PanelType, dateInjectionKey } from "../types";
import { useDayJs } from "../core";

export default defineComponent({
  name: "DateTable",
  components: { IconArrowLeftSLine, IconArrowRightSLine, IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  emits: ["change-picker"],
  setup(props, { emit }) {
    const name = "bp-date-table";

    let ctx: DatePickerContext = null;
    ctx = inject(dateInjectionKey);

    const { toDay, current, currentMonth, currentYear, dates, setDates, changeMonth, changeYear, weeks, months } =
      useDayJs(ctx.langs, ctx.modelValue.value);

    const currentVal = ref(current.value && current.value.format(ctx.valueFormat));

    setDates(ctx.valueFormat);

    const handleSelect = (date: DayCell) => {
      currentVal.value = date.value;
      ctx.onSelect(currentVal.value, {}, true);
    };

    /**
     * 月份/年份切换
     * @param mode 切换模式
     * @param type 类型
     * @param step 跨度
     */
    const handleChange = (mode: "month" | "year", type: "prev" | "next", step: number = 1) => {
      let v = mode === "month" ? currentMonth.value : currentYear.value;
      v = type === "next" ? v + step : v - step;
      mode === "month" ? changeMonth(v) : changeYear(v);
      setDates(ctx.valueFormat);
    };

    const handleChangePicker = (typeName: PanelType, val: number) => {
      emit("change-picker", typeName, val);
    };

    return {
      ctx,
      toDay,
      current,
      currentVal,
      name,
      weeks,
      months,
      dates,
      currentYear,
      currentMonth,
      handleChange,
      handleSelect,
      handleChangePicker,
      PanelType,
    };
  },
});
</script>
