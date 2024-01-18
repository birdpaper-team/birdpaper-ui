import { InjectionKey } from "vue";

/** 语言类型 */
export type LangsType = "en" | "zh-cn";

/** 日历中日期类型 */
export type DayType = "prev" | "normal" | "next";

/** 日历中日期单元格 */
export interface DayCell {
  type?: DayType;
  value: string;
  label?: string;
}

export interface DatePickerContext {
  /** 绑定值 */
  modelValue: string;
  /** 语言类型 */
  langs: LangsType;
  /** 值格式 */
  valueFormat: string;
  /** 选择后触发 */
  onSelect: (value: string, payload?: object) => void;
}
export const dateInjectionKey: InjectionKey<DatePickerContext> = Symbol("DatePickerCtxKey");
