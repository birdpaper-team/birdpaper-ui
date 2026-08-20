import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const checkboxProps: PropItem[] = [
  {
    name: "v-model",
    remark: "绑定值",
    remarkEn: "Bound value",
    type: ["CheckboxValue"],
    optional: ["String", "Number", "Boolean"],
  },
  {
    name: "value",
    remark: "复选框值",
    remarkEn: "Checkbox value",
    type: ["CheckboxValue"],
    optional: ["String", "Number", "Boolean"],
    default: "true",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
  { name: "indeterminate", remark: "不确定状态",
    remarkEn: "Indeterminate state", type: ["Boolean"], default: false },
  { name: "max", remark: "最大可选数量",
    remarkEn: "Max selectable count", type: ["Number"], default: 0 },
];

export const checkboxGroupProps: PropItem[] = [
  {
    name: "v-model",
    remark: "绑定值",
    remarkEn: "Bound value",
    type: ["CheckboxValue[]"],
  },
  {
    name: "direction",
    remark: "布局方式",
    remarkEn: "Layout direction",
    type: ["CheckboxDirectionType"],
    optional: ["vertical", "horizontal"],
    default: "horizontal",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
  { name: "max", remark: "最大可选数量",
    remarkEn: "Max selectable count", type: ["Number"], default: 0 },
];

export const checkboxEvents: EventItem[] = [{ name: "change", remark: "勾选触发",
    remarkEn: "Triggered on check", params: "{model:CheckboxValue}" }];
export const checkboxGroupEvents: EventItem[] = [
  { name: "change", remark: "勾选触发",
    remarkEn: "Triggered on check", params: "{model:CheckboxValue[]}" },
];

export const checkboxSlots: SlotItem[] = [{ name: "default", remark: "标签内容",
    remarkEn: "Label content" }];

export const checkboxGroupSlots: SlotItem[] = [{ name: "default", remark: "Checkbox 列表",
    remarkEn: "Checkbox list" }];
