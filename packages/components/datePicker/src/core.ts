import { DayCell, LangsType, MonthCell, YearCell } from "./types";
import dayjs, { Dayjs } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/zh-cn";
import { computed, ref } from "vue";
import { arrayTo2DArray } from "@birdpaper-ui/components/utils/array";

dayjs.extend(localeData);

export const useDayJs = (lang: LangsType, model: string) => {
  const localeDataApi = dayjs().locale(lang).localeData();
  const toDay: DayCell = { value: dayjs().locale(lang).format("YYYY-MM-DD"), label: "今天", type: "normal" };
  const current = ref(!model ? dayjs().locale(lang) : dayjs(model).locale(lang));
  const currentMonth = computed(() => current.value.month());
  const currentYear = computed(() => current.value.year());

  const weeks = localeDataApi.weekdaysMin();
  const months = localeDataApi.monthsShort();

  const dates = ref<DayCell[][]>([[], [], [], [], [], []]);

  /**
   * 设置日期选择器的日期范围。
   * 该函数计算当前月份的第一天和最后一天，并生成一个包含所有日期的二维数组。
   * 每个日期根据其在月份中的位置被标记为 "prev"（上个月）、"next"（下个月）或 "normal"（当前月）。
   * @returns 更新 dates 并返回。
   */
  const setDates = (val?: Dayjs) => {
    const time = (val ?? current.value).locale(lang);

    const start: Dayjs = time.startOf("month");
    const end: Dayjs = time.endOf("month");

    /** 获取当前月份的第一天是星期几，如果第一天是星期日，则返回1，否则返回对应的星期数 */
    const firstDateOfWeek: number = start.day() || 1;

    /** 当前日期所在月份的最后一天 */
    const lastDate: number = end.date();

    /** 计算并获取当前月份的第一天，并根据 firstDateOfWeek 或默认值 7 天进行偏移。 */
    const startDateValue: Dayjs = start.subtract(firstDateOfWeek || 7, "day");

    let cells: DayCell[] = [],
      sum = 0;
    for (let row = 0; row < 42; row++) {
      const day = startDateValue.add(sum, "day");

      cells.push({
        type: sum < firstDateOfWeek ? "prev" : sum - firstDateOfWeek >= lastDate ? "next" : "normal",
        label: day.date().toString(),
        value: day.format("YYYY-MM-DD"),
      });
      sum++;
    }

    dates.value = arrayTo2DArray(cells, 6, 7);
    return dates.value;
  };

  const setRangeDates = (begin: Dayjs, end: Dayjs): DayCell[][] => {
    const beginDates = setDates(begin.locale(lang));
    const endDates = setDates(end.locale(lang));
    return [...beginDates, ...endDates];
  };

  const changeMonth = (m: number) => (current.value = current.value.month(m));
  const changeYear = (y: number) => (current.value = current.value.year(y));

  const monthCell = ref<MonthCell[]>([]);
  const setMonthCell = () => {
    for (let i = 0; i < months.length; i++) {
      const label = months[i];
      const value = current.value.month(i);

      monthCell.value[i] = {
        value: value.format("YYYY-MM"),
        label: label || "",
      };
    }
  };

  const yearCell = ref<YearCell[]>([]);
  const firstYear = ref<number>(current.value.subtract(5, "year").year());
  const setYearCell = () => {
    for (let i = 1; i < 13; i++) {
      const value = current.value.year(firstYear.value + i).year();

      yearCell.value[i - 1] = {
        value,
        label: value.toString() || "",
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
    setRangeDates,
  };
};
