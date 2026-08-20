import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const rowProps: PropItem[] = [
  {
    name: "gutter",
    remark: "Gutter",
    type: ["String", "Number"],
  },
  {
    name: "justify",
    remark: "Horizontal alignment",
    type: ["Justify"],
    optional: ["start", "center", "end", "around", "between", "evenly"],
    default: "start",
  },
  {
    name: "align",
    remark: "Vertical alignment",
    type: ["Align"],
    optional: ["start", "center", "end", "baseline", "stretch"],
    default: "start",
  },
];

export const colProps: PropItem[] = [
  {
    name: "span",
    remark: "Span (1–24)",
    type: ["Number"],
    default: "24",
  },
  {
    name: "offset",
    remark: "Offset",
    type: ["Number"],
    default: "0",
  },
  {
    name: "xs",
    remark: "Responsive config under 768px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "sm",
    remark: "Responsive config ≥768px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "md",
    remark: "Responsive config ≥992px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "lg",
    remark: "Responsive config ≥1200px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "xl",
    remark: "Responsive config ≥1920px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
];

export const rowSlots: SlotItem[] = [
  { name: "default", remark: "Row content" },
];

export const colSlots: SlotItem[] = [
  { name: "default", remark: "Col content" },
];
