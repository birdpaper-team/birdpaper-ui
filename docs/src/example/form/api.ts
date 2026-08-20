import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const formProps: PropItem[] = [
  { name: "model", remark: "表单数据对象",
    remarkEn: "Form model", type: ["Object"] },
  { name: "rules", remark: "校验规则",
    remarkEn: "Validation rules", type: ["Rules"] },
  { name: "label-width", remark: "标签宽度",
    remarkEn: "Label width", type: ["String", "Number"], default: "80px" },
  {
    name: "label-position",
    remark: "标签位置",
    remarkEn: "Label position",
    type: ["String"],
    optional: ["right", "left", "top"],
    default: "right",
  },
  {
    name: "layout",
    remark: "表单布局",
    remarkEn: "Form layout",
    type: ["String"],
    optional: ["vertical", "inline"],
    default: "vertical",
  },
];

export const formItemProps: PropItem[] = [
  { name: "label", remark: "标签文本",
    remarkEn: "Label text", type: ["String"], default: "" },
  { name: "field", remark: "字段名",
    remarkEn: "Field name", type: ["String"], default: "" },
  { name: "required", remark: "是否必填",
    remarkEn: "Whether required", type: ["Boolean"], default: false },
  { name: "width", remark: "标签宽度",
    remarkEn: "Label width", type: ["String", "Number"] },
  { name: "show-colon", remark: "是否显示冒号",
    remarkEn: "Whether to show a colon", type: ["Boolean"], default: false },
  { name: "rules", remark: "表单项校验规则",
    remarkEn: "Form item validation rules", type: ["Rules"] },
  { name: "auto-validate", remark: "失焦自动校验",
    remarkEn: "Validate on blur", type: ["Boolean"], default: false },
];

export const formEvents: EventItem[] = [
  { name: "submit", remark: "提交触发",
    remarkEn: "Triggered on submit", params: "{ isValid: Boolean, model: Object }" },
];

export const formMethods: MethodItem[] = [
  { name: "validate", remark: "表单校验",
    remarkEn: "Validate the form", returns: "Promise<Boolean>" },
  { name: "clearValidate", remark: "清除校验结果",
    remarkEn: "Clear validation results", params: "fields?: string[]" },
  { name: "resetFields", remark: "重置字段值",
    remarkEn: "Reset field values" },
];

export const formSlots: SlotItem[] = [{ name: "default", remark: "表单内容",
    remarkEn: "Form content" }];

export const formItemSlots: SlotItem[] = [{ name: "default", remark: "表单项内容",
    remarkEn: "Form item content" }];
