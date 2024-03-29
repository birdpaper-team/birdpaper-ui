import { InjectionKey } from "vue";

export interface TimePickerContext {
  /** 绑定值 */
  modelValue: string;
  /** 选择后触发 */
  onSelect: (value: string, payload?: object) => void;
}
export const timeInjectionKey: InjectionKey<TimePickerContext> = Symbol("TimePickerCtxKey");
