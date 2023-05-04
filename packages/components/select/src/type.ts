import { InjectionKey } from "vue";

export interface SelectContext {
  onSelect: (value: string | number | boolean, payload: object) => void;
}

export const selectInjectionKey: InjectionKey<SelectContext> = Symbol("SelectCtxKey");
