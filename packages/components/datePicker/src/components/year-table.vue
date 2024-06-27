<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">
        <span :class="`${name}-header-inner-year`"> {{ firstYear }} - {{ firstYear + 12 }}</span>
      </div>
      <div :class="`${name}-header-option`">
        <IconArrowLeftDoubleFill @click="handleChange('prev')" size="20px" />
        <IconArrowRightDoubleFill @click="handleChange('next')" size="20px" />
      </div>
    </div>
    <div :class="`${name}-body`">
      <div
        v-for="col in yearCell"
        :class="[
          `${name}-year-cell`,
          { active: currentVal === col.value },
          { 'to-year': currentVal !== col.value && col.label === dayjs(toDay).year() + '' },
        ]"
        @click.stop="handleSelect(col)">
        <span :class="[`${name}-year-cell-inner`]">{{ col.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { DatePickerContext, YearCell, dateInjectionKey } from "../types";
import dayjs from "dayjs";
import { useDayJs } from "../core";
import { IconArrowLeftDoubleFill, IconArrowRightDoubleFill } from "birdpaper-icon";

export default defineComponent({
  name: "YearTable",
  components: { IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  emits: ["change-picker"],
  setup(props, { emit }) {
    const name = "bp-year-table";

    let ctx: DatePickerContext = null;
    ctx = inject(dateInjectionKey);

    const { toDay, current, firstYear, yearCell, setYearCell } = useDayJs(ctx.langs, ctx.modelValue.value);
    const currentVal = ref(current.value && current.value.format(ctx.valueFormat));

    setYearCell(ctx.valueFormat);

    const handleChange = (type: "prev" | "next", step: number = 12) => {
      let val = firstYear.value;
      firstYear.value = type === "next" ? val + step : val - step;
      setYearCell(ctx.valueFormat);
    };

    const handleSelect = (date: YearCell) => {
      currentVal.value = date.value;
      ctx.onSelect(currentVal.value, {}, false);
      emit("change-picker", "month");
    };

    return {
      name,
      ctx,
      toDay,
      handleChange,
      currentVal,
      yearCell,
      firstYear,
      handleSelect,
      dayjs,
    };
  },
});
</script>
