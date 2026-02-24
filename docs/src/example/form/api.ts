import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const formProps: PropItem[] = [
  { name: "model", remark: "表单数据对象", type: ["Object"] },
  { name: "rules", remark: "校验规则", type: ["Rules"] },
  { name: "label-width", remark: "标签宽度", type: ["String", "Number"], default: "80px" },
  {
    name: "label-position",
    remark: "标签位置",
    type: ["String"],
    optional: ["right", "left", "top"],
    default: "right",
  },
  {
    name: "layout",
    remark: "表单布局",
    type: ["String"],
    optional: ["vertical", "inline"],
    default: "vertical",
  },
];

export const formItemProps: PropItem[] = [
  { name: "label", remark: "标签文本", type: ["String"], default: "" },
  { name: "field", remark: "字段名", type: ["String"], default: "" },
  { name: "required", remark: "是否必填", type: ["Boolean"], default: false },
  { name: "width", remark: "标签宽度", type: ["String", "Number"] },
  { name: "show-colon", remark: "是否显示冒号", type: ["Boolean"], default: false },
  { name: "rules", remark: "表单项校验规则", type: ["Rules"] },
  { name: "auto-validate", remark: "失焦自动校验", type: ["Boolean"], default: false },
];

export const formEvents: EventItem[] = [
  { name: "submit", remark: "提交触发", params: "{ isValid: Boolean, model: Object }" },
];

export const formMethods: MethodItem[] = [
  { name: "validate", remark: "表单校验", returns: "Promise<Boolean>" },
  { name: "clearValidate", remark: "清除校验结果", params: "fields?: string[]" },
  { name: "resetFields", remark: "重置字段值" },
];

export const formSlots: SlotItem[] = [{ name: "default", remark: "表单内容" }];

export const formItemSlots: SlotItem[] = [{ name: "default", remark: "表单项内容" }];
