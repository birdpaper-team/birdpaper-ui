import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const radioProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["RadioValue"], optional: ["String", "Number", "Boolean"] },
  { name: "value", remark: "Radio value", type: ["RadioValue"], optional: ["String", "Number", "Boolean"] },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: "false" },
];

export const radioGroupProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["RadioValue"], optional: ["String", "Number", "Boolean"] },
  { name: "type", remark: "Radio group type", type: ["RadioType"], optional: ["radio", "button"] },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: "false" },
  {
    name: "size",
    remark: "Size",
    type: ["ButtonSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "direction", remark: "Radio group type", type: ["DirectionType"], optional: ["vertical", "horizontal"] },
];

export const radioEvents: EventItem[] = [{ name: "change", remark: "Triggered when the radio value changes", params: "value:RadioValue" }];

export const radioSlots: SlotItem[] = [{ name: "default", remark: "Content" }];

export const radioGroupSlots: SlotItem[] = [{ name: "default", remark: "Radio list" }];
