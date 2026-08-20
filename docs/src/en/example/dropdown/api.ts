import { EventItem, MethodItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const dropdownProps: PropItem[] = [
  { name: "position", remark: "Popup position", type: ["TriggerPosition"], default: "bottom" },
  { name: "trigger", remark: "Trigger", type: ["TriggerType"], default: "click" },
];

export const doptionProps: PropItem[] = [
  { name: "value", remark: "Option value", type: ["String", "Number"] },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
];

export const dropdownEvents: EventItem[] = [
  { name: "select", remark: "Triggered on select", params: "value?: DoptionValue" },
];

export const dropdownMethods: MethodItem[] = [
  { name: "open", remark: "Open the dropdown" },
  { name: "close", remark: "Close the dropdown" },
];

export const dropdownSlots: SlotItem[] = [
  { name: "default", remark: "Trigger area" },
  { name: "content", remark: "Dropdown content" },
];

export const doptionSlots: SlotItem[] = [{ name: "default", remark: "Option content" }];
