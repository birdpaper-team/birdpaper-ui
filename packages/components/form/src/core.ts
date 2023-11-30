import { getAllElements } from "../../../utils/dom";
import { Comment } from "vue";

/**
 * 获取校验规则信息
 * @param formRules
 * @param slots
 * @returns Record<string, RuleItem[]>
 */
export const getValidateInfo = (formRules: Record<string, any[]>, slots: any): Record<string, any[]> => {
  const children = getAllElements(slots.default?.(), true).filter(
    item => item.type !== Comment && (item.type as any).name === "BpFormItem"
  );

  let rules: Record<string, any[]> = formRules ?? {};

  for (let i = 0; i < children.length; i++) {
    const { field = null, rules: formItemRules } = children[i].props ?? {};

    if (field && formItemRules) {
      rules[field] = formItemRules;
    }
  }

  return rules;
};
