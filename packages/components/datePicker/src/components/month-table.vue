<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">
        <span :class="`${name}-header-inner-year`"> {{ currentYear }} </span>
      </div>
      <div :class="`${name}-header-option`">
        <IconArrowLeftDoubleFill @click="handleChange('prev')" size="20px" />
        <IconArrowRightDoubleFill @click="handleChange('next')" size="20px" />
      </div>
    </div>
    <div :class="`${name}-body`">
      <div
        v-for="col in monthCell"
        :class="[
          `${name}-month-cell`,
          { active: currentVal === col.value },
          { 'to-month': currentVal !== col.value && col.value === toDay.format(ctx.valueFormat) },
        ]"
        @click.stop="handleSelect(col)"
      >
        <span :class="[`${name}-month-cell-inner`]">{{ col.label }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { DatePickerContext, MonthCell, dateInjectionKey } from "../types";
import { useDayJs } from "../core";
import { IconArrowLeftDoubleFill, IconArrowRightDoubleFill } from "birdpaper-icon";

export default defineComponent({
  name: "MonthTable",
  components: { IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  emits: ["change-picker"],
  setup(props, { emit }) {
    const name = "bp-month-table";

    const ctx = ref<DatePickerContext>();
    ctx.value = inject(dateInjectionKey);

    const { toDay, current, currentYear, monthCell, setMonthCell, changeYear } = useDayJs(
      ctx.value.langs,
      ctx.value.modelValue
    );
    const currentVal = ref(current.value && current.value.format(ctx.value.valueFormat));

    setMonthCell(ctx.value.valueFormat);

    const handleChange = (type: "prev" | "next", step: number = 1) => {
      let val = currentYear.value;
      val = type === "next" ? val + step : val - step;
      changeYear(val);
      setMonthCell(ctx.value.valueFormat);
    };

    const handleSelect = (date: MonthCell) => {
      currentVal.value = date.value;
      ctx.value.onSelect(currentVal.value, {}, false);
      emit("change-picker", "date");
    };

    return {
      name,
      ctx,
      toDay,
      currentVal,
      currentYear,
      monthCell,
      handleSelect,
      handleChange,
    };
  },
});
</script>
