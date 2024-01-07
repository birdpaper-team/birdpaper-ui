<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">
        <span :class="`${name}-header-inner-year`">{{ currentYear }}</span>
        <span :class="`${name}-header-inner-month`">{{ months[currentMonth] }}</span>
      </div>
      <div :class="`${name}-header-option`">
        <IconArrowLeftDoubleFill @click="onChangeYear('prev')" size="20px" />
        <IconArrowLeftSLine @click="onChangeMonth('prev')" size="20px" />
        <IconArrowRightSLine @click="onChangeMonth('next')" size="20px" />
        <IconArrowRightDoubleFill @click="onChangeYear('next')" size="20px" />
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
            { 'to-day': col.value === toDay.format(ctx.valueFormat) },
          ]"
        >
          {{ col.label }}
        </span>
      </div>
    </div>
    <div :class="`${name}-footer`">
      <bp-button type="text" status="primary">今天</bp-button>
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
import { dateInjectionKey } from "../types";
import { useDayJs } from "../core";

export default defineComponent({
  name: "DateTable",
  components: { IconArrowLeftSLine, IconArrowRightSLine, IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  setup(props) {
    const name = "bp-date-table";
    const ctx = ref<any>();

    ctx.value = inject(dateInjectionKey);
    const { toDay, current, currentMonth, currentYear, dates, setDates, changeMonth, changeYear, weeks, months } =
      useDayJs(ctx.value.langs);

    const currentVal = current.value&&current.value.format(ctx.value.valueFormat);

    setDates(ctx.value.valueFormat);

    /**
     * 月份切换
     * @param type
     */
    const onChangeMonth = (type: "prev" | "next") => {
      let v = currentMonth.value;
      type === "next" ? v++ : v--;
      changeMonth(v);
      setDates(ctx.value.valueFormat);
    };

    /**
     * 年份切换
     * @param type
     */
    const onChangeYear = (type: "prev" | "next") => {
      let v = currentYear.value;
      type === "next" ? v++ : v--;
      changeYear(v);
      setDates(ctx.value.valueFormat);
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
      onChangeMonth,
      onChangeYear,
    };
  },
});
</script>
