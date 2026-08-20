import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const buttonProps: PropItem[] = [
  {
    name: "type",
    remark: "Button type",
    type: ["ButtonType"],
    optional: ["secondary", "normal", "plain", "dashed", "text"],
    default: "normal",
  },
  {
    name: "attr-type",
    remark: "Native type attribute",
    type: ["ButtonNavtiveType"],
    optional: ["button", "submit", "reset"],
    default: "button",
  },
  {
    name: "status",
    remark: "Button status",
    type: ["ButtonStatus"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  {
    name: "size",
    remark: "Button size",
    type: ["ButtonSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  {
    name: "shape",
    remark: "Button shape",
    type: ["ButtonShape"],
    optional: ["square", "round", "circle"],
    default: "square",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "loading", remark: "Whether loading", type: ["Boolean"], default: false },
  {
    name: "loading-icon",
    remark: "Loading icon",
    type: ["Number", "Icon"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  { name: "full", remark: "Whether to fill parent width", type: ["Boolean"], default: false },
  { name: "icon", remark: "Button icon", type: ["Icon"] },
  { name: "icon-gap", remark: "Gap between icon and text", type: ["String", "Number"] },
  {
    name: "icon-position",
    remark: "Icon position",
    type: ["ButtonIconPosition"],
    optional: ["left", "right"],
    default: "left",
  },
];

export const buttonGroupProps: PropItem[] = [
  {
    name: "type",
    remark: "Button type",
    type: ["ButtonType"],
    optional: ["secondary", "normal", "plain", "dashed", "text"],
    default: "normal",
  },
  {
    name: "status",
    remark: "Button status",
    type: ["ButtonStatus"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "gray",
  },
  {
    name: "size",
    remark: "Button size",
    type: ["ButtonSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  {
    name: "shape",
    remark: "Button shape",
    type: ["ButtonShape"],
    optional: ["square", "round", "circle"],
    default: "square",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
];

export const buttonEvents: EventItem[] = [{ name: "click", remark: "Triggered on click", params: "--" }];

export const buttonSlots: SlotItem[] = [{ name: "default", remark: "Default slot" }];

export const buttonGroupSlots: SlotItem[] = [{ name: "default", remark: "Button group content" }];
