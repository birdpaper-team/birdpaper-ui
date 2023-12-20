import type { Dayjs } from "dayjs";

/** 日历中日期类型 */
export type DayType = "prev" | "normal" | "next";

/** 日历中日期单元格 */
export interface DayCell {
  type: DayType;
  value: Dayjs;
  label: string;
}
