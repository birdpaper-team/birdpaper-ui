import { InjectionKey } from "vue";

/** 表单布局方式 */
export type FormLayout = "vertical" | "horizontal" | "inline";

export interface FormContext {
  model: object;
}

export const FormInjectionKey: InjectionKey<FormContext> = Symbol("FormCtxKey");
