import type { InjectionKey } from "vue";
import type { Rule, Rules, Values } from "async-validator";

export const formContextKey: InjectionKey<FormContext> = Symbol("formContext");

export interface FormContext {
  model: Record<string, any>;
  rules?: Rules | Rule;
  labelWidth?: string | number;
  labelPosition?: "right" | "left" | "top";
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
}

export interface FormItemContext {
  field?: string;
  validate: () => Promise<Values | boolean>;
  clearValidate: () => void;
  updateError: (error: string) => void;
  getRules?: () => Rule | Rules | undefined;
}

export interface FormInstance {
  validate: () => Promise<boolean>;
  clearValidate: (props?: string[]) => void;
  resetFields: () => void;
}

export interface FormItemInstance {
  validate: () => Promise<Values>;
  clearValidate: () => void;
}
