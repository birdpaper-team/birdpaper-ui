import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const selectProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["SelectValue"], optional: ["Number", "String", "Boolean"] },
  { name: "name", remark: "选择器名称",
    remarkEn: "Picker name", type: ["String"] },
  { name: "placeholder", remark: "占位文本",
    remarkEn: "Placeholder", type: ["String"] },
  {
    name: "size",
    remark: "选择器尺寸",
    remarkEn: "Select size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: "false" },
  { name: "clearable", remark: "是否允许清空",
    remarkEn: "Whether clearable", type: ["Boolean"], default: "false" },
  { name: "multiple", remark: "是否多选",
    remarkEn: "Whether multiple", type: ["Boolean"], default: "false" },
  { name: "max-tag-count", remark: "最多显示标签数",
    remarkEn: "Max visible tags", type: ["Number"], default: "0" },
];

export const optionProps: PropItem[] = [
  { name: "value", remark: "绑定值",
    remarkEn: "Bound value", type: ["SelectValue"], optional: ["Number", "String", "Boolean"] },
  { name: "label", remark: "显示文本",
    remarkEn: "Display text", type: ["String"] },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: "false" },
];

export const selectEvents: EventItem[] = [{ name: "change", remark: "选项改变触发",
    remarkEn: "Triggered when the selection changes", params: "val: SelectValue" }];

export const selectMethods: MethodItem[] = [
  { name: "open", remark: "打开下拉",
    remarkEn: "Open the dropdown" },
  { name: "close", remark: "关闭下拉",
    remarkEn: "Close the dropdown" },
];

export const selectSlots: SlotItem[] = [{ name: "default", remark: "Option 列表",
    remarkEn: "Option list" }];

export const optionSlots: SlotItem[] = [{ name: "default", remark: "选项内容",
    remarkEn: "Option content" }];
