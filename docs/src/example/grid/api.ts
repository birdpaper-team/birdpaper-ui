import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const rowProps: PropItem[] = [
  {
    name: "gutter",
    remark: "栏位间隔",
    remarkEn: "Gutter",
    type: ["String", "Number"],
  },
  {
    name: "justify",
    remark: "水平对齐方式",
    remarkEn: "Horizontal alignment",
    type: ["Justify"],
    optional: ["start", "center", "end", "around", "between", "evenly"],
    default: "start",
  },
  {
    name: "align",
    remark: "纵向对齐方式",
    remarkEn: "Vertical alignment",
    type: ["Align"],
    optional: ["start", "center", "end", "baseline", "stretch"],
    default: "start",
  },
];

export const colProps: PropItem[] = [
  {
    name: "span",
    remark: "1-24 栏位",
    remarkEn: "Span (1–24)",
    type: ["Number"],
    default: "24",
  },
  {
    name: "offset",
    remark: "偏移量",
    remarkEn: "Offset",
    type: ["Number"],
    default: "0",
  },
  {
    name: "xs",
    remark: "<768px 响应式配置",
    remarkEn: "Responsive config under 768px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "sm",
    remark: "≥768px 响应式配置",
    remarkEn: "Responsive config ≥768px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "md",
    remark: "≥992px 响应式配置",
    remarkEn: "Responsive config ≥992px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "lg",
    remark: "≥1200px 响应式配置",
    remarkEn: "Responsive config ≥1200px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "xl",
    remark: "≥1920px 响应式配置",
    remarkEn: "Responsive config ≥1920px",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
];

export const rowSlots: SlotItem[] = [
  { name: "default", remark: "Row 内容",
    remarkEn: "Row content" },
];

export const colSlots: SlotItem[] = [
  { name: "default", remark: "Col 内容",
    remarkEn: "Col content" },
];
