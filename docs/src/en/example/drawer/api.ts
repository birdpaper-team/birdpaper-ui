import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const drawerProps: PropItem[] = [
  { name: "v-model", remark: "Whether the drawer is visible", type: ["Boolean"] },
  { name: "title", remark: "Drawer title", type: ["String"], default: "Title" },
  { name: "width", remark: "Drawer width (for left/right)", type: ["String"], default: "360px" },
  { name: "height", remark: "Drawer height (for up/down)", type: ["String"], default: "360px" },
  {
    name: "placement",
    remark: "Drawer placement",
    type: ["String"],
    optional: ["left", "right", "up", "down"],
    default: "right",
  },
  { name: "hide-footer", remark: "Whether to hide the footer", type: ["Boolean"], default: false },
  { name: "hide-close", remark: "Whether to hide the close button", type: ["Boolean"], default: false },
  { name: "border", remark: "Whether bordered", type: ["Boolean"], default: false },
  { name: "mask-closable", remark: "Whether clicking the mask closes the drawer", type: ["Boolean"], default: true },
  { name: "ok-text", remark: "OK button text", type: ["String"], default: "OK" },
  { name: "cancel-text", remark: "Cancel button text", type: ["String"], default: "Cancel" },
  {
    name: "on-before-ok",
    remark: "Async callback before confirm; return true to close, false to keep open. Button shows loading automatically",
    type: ["Function"],
  },
];

export const drawerEvents: EventItem[] = [
  { name: "cancel", remark: "Triggered on cancel or close" },
  { name: "confirm", remark: "Triggered after confirm" },
];

export const drawerSlots: SlotItem[] = [
  { name: "default", remark: "Drawer body content" },
  { name: "header", remark: "Custom header" },
  { name: "footer", remark: "Custom footer actions" },
];
