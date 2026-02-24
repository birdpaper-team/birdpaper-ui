import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const selectProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["SelectValue"], optional: ["Number", "String", "Boolean"] },
  { name: "name", remark: "选择器名称", type: ["String"] },
  { name: "placeholder", remark: "占位文本", type: ["String"] },
  {
    name: "size",
    remark: "选择器尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
  { name: "clearable", remark: "是否允许清空", type: ["Boolean"], default: "false" },
  { name: "multiple", remark: "是否多选", type: ["Boolean"], default: "false" },
  { name: "max-tag-count", remark: "最多显示标签数", type: ["Number"], default: "0" },
];

export const optionProps: PropItem[] = [
  { name: "value", remark: "绑定值", type: ["SelectValue"], optional: ["Number", "String", "Boolean"] },
  { name: "label", remark: "显示文本", type: ["String"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
];

export const selectEvents: EventItem[] = [{ name: "change", remark: "选项改变触发", params: "val: SelectValue" }];

export const selectMethods: MethodItem[] = [
  { name: "open", remark: "打开下拉" },
  { name: "close", remark: "关闭下拉" },
];

export const selectSlots: SlotItem[] = [{ name: "default", remark: "Option 列表" }];

export const optionSlots: SlotItem[] = [{ name: "default", remark: "选项内容" }];
