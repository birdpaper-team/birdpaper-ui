<template>
  <div :class="name">
    <div :class="`${name}-header`">
      <IconArrowLeftDoubleFill size="20px" />
      <IconArrowLeftSLine size="20px" />
      <span :class="`${name}-header-inner`">2024 - 12</span>
      <IconArrowRightSLine size="20px" />
      <IconArrowRightDoubleFill size="20px" />
    </div>
    <div :class="`${name}-week`">
      <span :class="`${name}-week-inner`" v-for="v in weeks">{{ v }}</span>
    </div>
    <div :class="`${name}-body`">
      <div :class="`${name}-body-row`" v-for="row in days">
        <span :class="`${name}-body-inner`" v-for="col in row">
          {{ col.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData.js";
import {
  IconArrowLeftSLine,
  IconArrowRightSLine,
  IconArrowLeftDoubleFill,
  IconArrowRightDoubleFill,
} from "birdpaper-icon";

export default defineComponent({
  name: "DateTable",
  props: {
    date: { type: Object as PropType<Dayjs>, default: () => dayjs() },
  },
  components: { IconArrowLeftSLine, IconArrowRightSLine, IconArrowLeftDoubleFill, IconArrowRightDoubleFill },
  setup(props) {
    const name = "bp-date-table";

    const weeks = ["日", "一", "二", "三", "四", "五", "六"];
    const days = ref([[], [], [], [], [], []]);

    const current = dayjs();
    dayjs.extend(localeData);

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
          const label = value.date();

          let type = "normal";
          if (sum < firstDay) {
            type = "prev";
          }
          if (sum - firstDay >= lastDate) {
            type = "next";
          }

          days.value[row][col] = {
            type,
            value,
            label,
          };

          sum++;
        }
      }
    };

    setDays();

    return {
      name,
      weeks,
      days,
    };
  },
});
</script>
