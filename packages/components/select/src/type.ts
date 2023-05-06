import { InjectionKey } from "vue";

export type SelectBindValue = string | number | boolean;

export class SelectOption {
  label: string = "";
  value: SelectBindValue = "";
}

export interface SelectContext {
  modelValue: SelectBindValue;
  onSelect: (value: SelectBindValue, payload: object) => void;
}

export const selectInjectionKey: InjectionKey<SelectContext> = Symbol("SelectCtxKey");
