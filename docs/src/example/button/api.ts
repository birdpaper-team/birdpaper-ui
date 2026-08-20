import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const buttonProps: PropItem[] = [
  {
    name: "type",
    remark: "按钮类型",
    remarkEn: "Button type",
    type: ["ButtonType"],
    optional: ["secondary", "normal", "plain", "dashed", "text"],
    default: "normal",
  },
  {
    name: "attr-type",
    remark: "原生Type属性",
    remarkEn: "Native type attribute",
    type: ["ButtonNavtiveType"],
    optional: ["button", "submit", "reset"],
    default: "button",
  },
  {
    name: "status",
    remark: "按钮状态",
    remarkEn: "Button status",
    type: ["ButtonStatus"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  {
    name: "size",
    remark: "按钮尺寸",
    remarkEn: "Button size",
    type: ["ButtonSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  {
    name: "shape",
    remark: "按钮形状",
    remarkEn: "Button shape",
    type: ["ButtonShape"],
    optional: ["square", "round", "circle"],
    default: "square",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
  { name: "loading", remark: "是否加载",
    remarkEn: "Whether loading", type: ["Boolean"], default: false },
  {
    name: "loading-icon",
    remark: "加载图标",
    remarkEn: "Loading icon",
    type: ["Number", "Icon"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  { name: "full", remark: "宽度是否撑满父级",
    remarkEn: "Whether to fill parent width", type: ["Boolean"], default: false },
  { name: "icon", remark: "按钮图标",
    remarkEn: "Button icon", type: ["Icon"] },
  { name: "icon-gap", remark: "图标与文字间距",
    remarkEn: "Gap between icon and text", type: ["String", "Number"] },
  {
    name: "icon-position",
    remark: "图标位置",
    remarkEn: "Icon position",
    type: ["ButtonIconPosition"],
    optional: ["left", "right"],
    default: "left",
  },
];

export const buttonGroupProps: PropItem[] = [
  {
    name: "type",
    remark: "按钮类型",
    remarkEn: "Button type",
    type: ["ButtonType"],
    optional: ["secondary", "normal", "plain", "dashed", "text"],
    default: "normal",
  },
  {
    name: "status",
    remark: "按钮状态",
    remarkEn: "Button status",
    type: ["ButtonStatus"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "gray",
  },
  {
    name: "size",
    remark: "按钮尺寸",
    remarkEn: "Button size",
    type: ["ButtonSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  {
    name: "shape",
    remark: "按钮形状",
    remarkEn: "Button shape",
    type: ["ButtonShape"],
    optional: ["square", "round", "circle"],
    default: "square",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
];

export const buttonEvents: EventItem[] = [{ name: "click", remark: "点击触发",
    remarkEn: "Triggered on click", params: "--" }];

export const buttonSlots: SlotItem[] = [{ name: "default", remark: "默认插槽",
    remarkEn: "Default slot" }];

export const buttonGroupSlots: SlotItem[] = [{ name: "default", remark: "按钮组内容",
    remarkEn: "Button group content" }];
