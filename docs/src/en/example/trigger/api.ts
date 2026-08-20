import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const triggerProps: PropItem[] = [
  { name: "v-model", remark: "Controls popup visibility", type: ["Boolean"], default: false },
  {
    name: "trigger",
    remark: "Trigger",
    type: ["TriggerType"],
    optional: ["click", "hover"],
    default: "click",
  },
  { name: "position", remark: "Popup position; supports 12 placements", type: ["TriggerPosition"], default: "bottom" },
  { name: "popup-offset", remark: "Offset between popup and trigger", type: ["Number"], default: 0 },
  { name: "popup-translate", remark: "Popup translate offset [x, y]", type: ["Array"], default: "[0, 0]" },
  { name: "auto-fit-width", remark: "Whether popup matches trigger width", type: ["Boolean"], default: false },
  { name: "transition", remark: "Popup transition name", type: ["String"], default: "fade" },
  { name: "click-outside", remark: "Whether clicking outside closes the popup", type: ["Boolean"], default: true },
  { name: "disabled", remark: "Whether trigger is disabled", type: ["Boolean"], default: false },
  { name: "hide-trigger", remark: "Whether to hide the trigger element", type: ["Boolean"], default: false },
  { name: "update-at-scroll", remark: "Whether to update popup position on scroll", type: ["Boolean"], default: false },
  { name: "scroll-to-close", remark: "Whether to close popup on scroll", type: ["Boolean"], default: false },
  { name: "auto-fix-position", remark: "Whether to auto-fit popup position to the viewport", type: ["Boolean"], default: true },
  { name: "scroll-to-close-time", remark: "Delay before closing on scroll (ms)", type: ["Number"], default: 400 },
  { name: "throttle-time", remark: "Throttle for resize/scroll events (ms)", type: ["Number"], default: 20 },
  { name: "open-delay", remark: "Hover open delay (ms)", type: ["Number"], default: 0 },
  { name: "close-delay", remark: "Hover close delay (ms)", type: ["Number"], default: 100 },
  { name: "boundary-padding", remark: "Minimum margin from viewport edges", type: ["Number"], default: 8 },
  { name: "show-arrow", remark: "Whether to show an arrow pointing to the trigger", type: ["Boolean"], default: false },
  { name: "get-popup-container", remark: "Custom popup mount container", type: ["Function"] },
];

export const triggerEvents: EventItem[] = [
  { name: "update:modelValue", remark: "Triggered when popup visibility changes", params: "visible: boolean" },
  { name: "popupVisible", remark: "Triggered when popup shows or hides", params: "visible: boolean" },
  { name: "positionChange", remark: "Triggered when popup position changes", params: "{ position, top, left, width }" },
];

export const triggerSlots: SlotItem[] = [
  { name: "default", remark: "Element that triggers the popup" },
  { name: "content", remark: "Popup content" },
];
