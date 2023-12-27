import { DayCell, DayType, LangsType } from "./types";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/zh-cn";
import { computed, ref } from "vue";

export const useDayJs = (lang: LangsType) => {
  dayjs.locale(lang);
  dayjs.extend(localeData);

  const current = ref(dayjs());
  const currentMonth = computed(() => current.value.month());
  const currentYear = computed(() => current.value.year());
  /** 当前月起始周N */
  const firstDay = computed(() => current.value.startOf("month").day());
  /** 当前最后一天 */
  const lastDate = computed(() => current.value.endOf("month").date());
  /** 当前月视图起始日期 */
  const startDate = computed(() => {
    return current.value.startOf("month").subtract(firstDay.value || 7, "day");
  });

  const weeks = dayjs.weekdaysMin();
  const months = dayjs.monthsShort();

  const dates = ref<DayCell[][]>([[], [], [], [], [], []]);
  const setDates = (valueFormat: string) => {
    let sum = 0;
    for (let row = 0; row < dates.value.length; row++) {
      for (let col = 0; col < 7; col++) {
        const value = startDate.value.add(sum, "day");
        const label = value.date().toString();

        let type: DayType = "normal";
        if (sum < firstDay.value) {
          type = "prev";
        }
        if (sum - firstDay.value >= lastDate.value) {
          type = "next";
        }

        dates.value[row][col] = { type, value: value.format(valueFormat), label };
        sum++;
      }
    }
  };

  const changeMonth = (m: number) => {
    current.value = current.value.month(m);
  };

  return {
    current,
    currentMonth,
    currentYear,
    dates,
    setDates,
    weeks,
    months,
    changeMonth,
  };
};
