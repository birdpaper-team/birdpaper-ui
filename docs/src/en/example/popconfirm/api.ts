import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const popconfirmProps: PropItem[] = [
  { name: "content", remark: "Popconfirm content", type: ["String"], default: "" },
  {
    name: "type",
    remark: "Popconfirm type; affects icon and button style",
    type: ["String"],
    optional: ["info", "success", "warning", "error"],
    default: "info",
  },
  { name: "position", remark: "Popup position", type: ["TriggerPosition"], default: "top" },
  { name: "ok-text", remark: "OK button text", type: ["String"], default: "OK" },
  { name: "cancel-text", remark: "Cancel button text", type: ["String"], default: "Cancel" },
  {
    name: "on-before-ok",
    remark: "Async callback before confirm; return true to close, false to keep open. Button shows loading automatically",
    type: ["Function"],
  },
];

export const popconfirmEvents: EventItem[] = [
  { name: "ok", remark: "Triggered after confirm" },
  { name: "cancel", remark: "Triggered after cancel" },
];

export const popconfirmSlots: SlotItem[] = [{ name: "default", remark: "Element that triggers the popup" }];
