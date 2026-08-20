import { EventItem, MethodItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const selectProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["SelectValue"], optional: ["Number", "String", "Boolean"] },
  { name: "name", remark: "Picker name", type: ["String"] },
  { name: "placeholder", remark: "Placeholder", type: ["String"] },
  {
    name: "size",
    remark: "Select size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: "false" },
  { name: "clearable", remark: "Whether clearable", type: ["Boolean"], default: "false" },
  { name: "multiple", remark: "Whether multiple", type: ["Boolean"], default: "false" },
  { name: "max-tag-count", remark: "Max visible tags", type: ["Number"], default: "0" },
];

export const optionProps: PropItem[] = [
  { name: "value", remark: "Bound value", type: ["SelectValue"], optional: ["Number", "String", "Boolean"] },
  { name: "label", remark: "Display text", type: ["String"] },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: "false" },
];

export const selectEvents: EventItem[] = [{ name: "change", remark: "Triggered when the selection changes", params: "val: SelectValue" }];

export const selectMethods: MethodItem[] = [
  { name: "open", remark: "Open the dropdown" },
  { name: "close", remark: "Close the dropdown" },
];

export const selectSlots: SlotItem[] = [{ name: "default", remark: "Option list" }];

export const optionSlots: SlotItem[] = [{ name: "default", remark: "Option content" }];
