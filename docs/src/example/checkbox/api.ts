import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const checkboxProps: PropItem[] = [
  {
    name: "v-model",
    remark: "绑定值",
    type: ["CheckboxValue"],
    optional: ["String", "Number", "Boolean"],
  },
  {
    name: "value",
    remark: "复选框值",
    type: ["CheckboxValue"],
    optional: ["String", "Number", "Boolean"],
    default: "true",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "indeterminate", remark: "不确定状态", type: ["Boolean"], default: false },
  { name: "max", remark: "最大可选数量", type: ["Number"], default: 0 },
];

export const checkboxGroupProps: PropItem[] = [
  {
    name: "v-model",
    remark: "绑定值",
    type: ["CheckboxValue[]"],
  },
  {
    name: "direction",
    remark: "布局方式",
    type: ["CheckboxDirectionType"],
    optional: ["vertical", "horizontal"],
    default: "horizontal",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "max", remark: "最大可选数量", type: ["Number"], default: 0 },
];

export const checkboxEvents: EventItem[] = [{ name: "change", remark: "勾选触发", params: "{model:CheckboxValue}" }];
export const checkboxGroupEvents: EventItem[] = [
  { name: "change", remark: "勾选触发", params: "{model:CheckboxValue[]}" },
];

export const checkboxSlots: SlotItem[] = [{ name: "default", remark: "标签内容" }];

export const checkboxGroupSlots: SlotItem[] = [{ name: "default", remark: "Checkbox 列表" }];
