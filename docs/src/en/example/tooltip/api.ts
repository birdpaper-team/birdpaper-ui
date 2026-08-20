import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const tooltipProps: PropItem[] = [
  { name: "content", remark: "Tooltip text", type: ["String"], default: "" },
  {
    name: "trigger",
    remark: "Trigger",
    type: ["TriggerType"],
    optional: ["click", "hover"],
    default: "hover",
  },
  {
    name: "theme",
    remark: "Tooltip theme",
    type: ["String"],
    optional: ["dark", "light"],
    default: "dark",
  },
  {
    name: "position",
    remark: "Popup position",
    type: ["String"],
    optional: ["top", "bottom"],
    default: "top",
  },
];

export const tooltipSlots: SlotItem[] = [
  { name: "default", remark: "Element that triggers the popup" },
  { name: "content", remark: "Custom tooltip content" },
];
