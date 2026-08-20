import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const alertProps: PropItem[] = [
  { name: "title", remark: "Alert title", type: ["String"], default: "" },
  { name: "content", remark: "Detailed description", type: ["String"], default: "" },
  {
    name: "status",
    remark: "Alert status type",
    type: ["String"],
    optional: ["info", "success", "warning", "danger"],
    default: "info",
  },
  { name: "icon", remark: "Custom icon component", type: ["Component"] },
  { name: "hide-border", remark: "Whether to hide the border", type: ["Boolean"], default: false },
  { name: "hide-icon", remark: "Whether to hide icon", type: ["Boolean"], default: false },
  { name: "show-close", remark: "Whether to show close Button", type: ["Boolean"], default: false },
];

export const alertEvents: EventItem[] = [{ name: "close", remark: "Triggered when the alert is closed" }];

export const alertSlots: SlotItem[] = [
  { name: "content", remark: "Custom description area" },
  { name: "close", remark: "Custom close button content" },
];
