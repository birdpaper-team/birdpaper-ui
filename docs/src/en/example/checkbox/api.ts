import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const checkboxProps: PropItem[] = [
  {
    name: "v-model",
    remark: "Bound value",
    type: ["CheckboxValue"],
    optional: ["String", "Number", "Boolean"],
  },
  {
    name: "value",
    remark: "Checkbox value",
    type: ["CheckboxValue"],
    optional: ["String", "Number", "Boolean"],
    default: "true",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "indeterminate", remark: "Indeterminate state", type: ["Boolean"], default: false },
  { name: "max", remark: "Max selectable count", type: ["Number"], default: 0 },
];

export const checkboxGroupProps: PropItem[] = [
  {
    name: "v-model",
    remark: "Bound value",
    type: ["CheckboxValue[]"],
  },
  {
    name: "direction",
    remark: "Layout direction",
    type: ["CheckboxDirectionType"],
    optional: ["vertical", "horizontal"],
    default: "horizontal",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "max", remark: "Max selectable count", type: ["Number"], default: 0 },
];

export const checkboxEvents: EventItem[] = [{ name: "change", remark: "Triggered on check", params: "{model:CheckboxValue}" }];
export const checkboxGroupEvents: EventItem[] = [
  { name: "change", remark: "Triggered on check", params: "{model:CheckboxValue[]}" },
];

export const checkboxSlots: SlotItem[] = [{ name: "default", remark: "Label content" }];

export const checkboxGroupSlots: SlotItem[] = [{ name: "default", remark: "Checkbox list" }];
