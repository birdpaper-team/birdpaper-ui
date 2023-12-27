<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <div :class="`${name}-header-inner`">
        <span :class="`${name}-header-inner-year`">2024</span>
        <span :class="`${name}-header-inner-month`">12月</span>
      </div>
      <div :class="`${name}-header-option`">
        <IconArrowLeftDoubleFill size="20px" />
        <IconArrowLeftSLine size="20px" />
        <IconArrowRightSLine size="20px" />
        <IconArrowRightDoubleFill size="20px" />
      </div>
    </div>
    <div :class="`${name}-week`">
      <span :class="`${name}-week-inner`" v-for="v in weeks">{{ v }}</span>
    </div>
    <div :class="`${name}-body`">
      <div :class="`${name}-body-row`" v-for="row in days">
        <span
          v-for="col in row"
          :class="[`${name}-body-inner`, `day-cell-${col.type}`, { active: currentVal === col.value }]"
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
import { defineComponent, ref, computed, inject } from "vue";
import dayjs, { Dayjs } from "dayjs";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";
import { DayCell, DayType, dateInjectionKey } from "../types";
import { useDayJs } from "../core";

export default defineComponent({
  name: "DateTable",
  components: { IconArrowLeftSLine, IconArrowRightSLine, IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  setup(props) {
    const name = "bp-date-table";
    const ctx = ref<any>();

    ctx.value = inject(dateInjectionKey);
    const { getWeeksList } = useDayJs(ctx.value.langs);

    const weeks = getWeeksList();
    const days = ref<DayCell[][]>([[], [], [], [], [], []]);

    const current = dayjs();
    const currentVal = current.format(ctx.value.valueFormat);

    const firstDay = current.startOf("month").day();
    const lastDate = current.endOf("month").date();

    const startDate = computed(() => {
      return current.startOf("month").subtract(firstDay || 7, "day");
    });

    const setDays = () => {
      let sum = 0;
      for (let row = 0; row < days.value.length; row++) {
        for (let col = 0; col < 7; col++) {
          const value = startDate.value.add(sum, "day");
          const label = value.date().toString();

          let type: DayType = "normal";
          if (sum < firstDay) {
            type = "prev";
          }
          if (sum - firstDay >= lastDate) {
            type = "next";
          }

          days.value[row][col] = { type, value: value.format(ctx.value.valueFormat), label };
          sum++;
        }
      }
    };

    setDays();

    return {
      ctx,
      current,
      currentVal,
      name,
      weeks,
      days,
    };
  },
});
</script>
