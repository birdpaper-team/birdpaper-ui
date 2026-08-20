import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const modalProps: PropItem[] = [
  { name: "v-model", remark: "Whether the modal is visible", type: ["Boolean"], default: false },
  { name: "is-method", remark: "Whether opened via imperative API (internal)", type: ["Boolean"], default: false },
  {
    name: "type",
    remark: "Modal type; affects title icon style",
    type: ["String"],
    optional: ["info", "success", "warning", "error", "confirm"],
  },
  { name: "title", remark: "Modal title", type: ["String"], default: "" },
  { name: "content", remark: "Modal content text", type: ["String"] },
  { name: "width", remark: "Modal width", type: ["String", "Number"], default: "50%" },
  { name: "body-class", remark: "Custom class for the body area", type: ["String"] },
  { name: "border-radius", remark: "Modal border radius", type: ["String"], default: "8px" },
  { name: "center", remark: "Whether vertically centered", type: ["Boolean"], default: false },
  { name: "show-border", remark: "Whether bordered", type: ["Boolean"], default: true },
  { name: "top", remark: "Offset from the top", type: ["String"], default: "0" },
  { name: "bottom", remark: "Offset from the bottom", type: ["String"], default: "0" },
  { name: "mask-closable", remark: "Whether clicking the mask closes the modal", type: ["Boolean"], default: true },
  { name: "hide-header", remark: "Whether to hide the header", type: ["Boolean"], default: false },
  { name: "hide-footer", remark: "Whether to hide the footer", type: ["Boolean"], default: false },
  { name: "hide-close", remark: "Whether to hide the close button", type: ["Boolean"], default: false },
  { name: "fullscreen", remark: "Whether fullscreen", type: ["Boolean"], default: false },
  { name: "ok-text", remark: "OK button text", type: ["String"], default: "OK" },
  { name: "ok-btn-props", remark: "OK button props, passed through to Button", type: ["Object"] },
  { name: "cancel-text", remark: "Cancel button text", type: ["String"], default: "Cancel" },
  { name: "cancel-btn-props", remark: "Cancel button props, passed through to Button", type: ["Object"] },
  { name: "hide-cancel", remark: "Whether to hide the cancel button", type: ["Boolean"], default: false },
  { name: "hide-title-icon", remark: "Whether to hide title icon", type: ["Boolean"], default: false },
  {
    name: "on-before-ok",
    remark: "Async callback before confirm; return true to close, false to keep open. Button shows loading automatically",
    type: ["Function"],
  },
];

export const modalEvents: EventItem[] = [
  { name: "cancel", remark: "Triggered on cancel or close" },
  { name: "confirm", remark: "Triggered after confirm" },
];

export const modalSlots: SlotItem[] = [
  { name: "default", remark: "Modal body content" },
  { name: "header", remark: "Custom header" },
  { name: "footer", remark: "Custom footer actions" },
];
