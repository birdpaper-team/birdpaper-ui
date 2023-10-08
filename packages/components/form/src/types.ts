import { InjectionKey } from "vue";

/** 表单布局方式 */
export type FormLayout = "vertical" | "horizontal" | "inline";

export interface FormContext {
  model: object;
  layout: FormLayout;
}

export const FormInjectionKey: InjectionKey<FormContext> = Symbol("FormCtxKey");
