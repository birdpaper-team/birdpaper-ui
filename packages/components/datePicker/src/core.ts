import { DayCell, DayType, LangsType, MonthCell, YearCell } from "./types";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/zh-cn";
import { computed, ref } from "vue";

export const useDayJs = (lang: LangsType, modelValue: string) => {
  dayjs.locale(lang);
  dayjs.extend(localeData);

  const toDay = dayjs().format("YYYY-MM-DD");
  const current = ref(!modelValue ? dayjs() : dayjs(modelValue));
  const currentMonth = computed(() => current.value.month());
  const currentYear = computed(() => current.value.year());

  const weeks = dayjs.weekdaysMin();
  const months = dayjs.monthsShort();

  const dates = ref<DayCell[][]>([[], [], [], [], [], []]);
  const setDates = (valueFormat: string) => {
    let sum = 0;
    /** 当前月起始周N */
    const firstDay = current.value.startOf("month").day() || 1;
    /** 当前最后一天 */
    const lastDate = current.value.endOf("month").date();
    /** 当前月视图起始日期 */
    const startDate = current.value.startOf("month").subtract(firstDay || 7, "day");

    for (let row = 0; row < dates.value.length; row++) {
      for (let col = 0; col < 7; col++) {
        const value = startDate.add(sum, "day");
        const label = value.date().toString();

        let type: DayType = "normal";
        if (sum < firstDay) {
          type = "prev";
        }
        if (sum - firstDay >= lastDate) {
          type = "next";
        }

        dates.value[row][col] = { type, value: value.format("YYYY-MM-DD"), label };
        sum++;
      }
    }
  };

  const changeMonth = (m: number) => (current.value = current.value.month(m));
  const changeYear = (y: number) => (current.value = current.value.year(y));

  const monthCell = ref<MonthCell[]>([]);
  const setMonthCell = (valueFormat: string) => {
    for (let i = 0; i < months.length; i++) {
      const label = months[i];
      const value = current.value.month(i);

      monthCell.value[i] = {
        value: value.format(valueFormat),
        label,
      };
    }
  };

  const yearCell = ref<YearCell[]>([]);
  const firstYear = ref<number>(current.value.subtract(5, "year").year());
  const setYearCell = (valueFormat: string) => {
    for (let i = 1; i < 13; i++) {
      const value = current.value.year(firstYear.value + i);

      yearCell.value[i - 1] = {
        value: value.format(valueFormat),
        label: value.year() + "",
      };
    }
  };

  return {
    toDay,
    current,
    currentMonth,
    currentYear,
    dates,
    setDates,
    weeks,
    months,
    monthCell,
    setMonthCell,
    changeMonth,
    changeYear,
    yearCell,
    firstYear,
    setYearCell,
  };
};
