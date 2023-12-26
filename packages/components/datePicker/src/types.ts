import type { Dayjs } from "dayjs";
import { InjectionKey } from "vue";

/** 语言类型 */
export type LangsType = "EN" | "CN";

/** 日历中日期类型 */
export type DayType = "prev" | "normal" | "next";

/** 日历中日期单元格 */
export interface DayCell {
  type: DayType;
  value: string;
  label: string;
}

export const dateInjectionKey: InjectionKey<any> = Symbol("DatePickerCtxKey");