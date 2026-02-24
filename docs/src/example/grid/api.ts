import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const rowProps: PropItem[] = [
  {
    name: "gutter",
    remark: "栏位间隔",
    type: ["String", "Number"],
  },
  {
    name: "justify",
    remark: "水平对齐方式",
    type: ["Justify"],
    optional: ["start", "center", "end", "around", "between", "evenly"],
    default: "start",
  },
  {
    name: "align",
    remark: "纵向对齐方式",
    type: ["Align"],
    optional: ["start", "center", "end", "baseline", "stretch"],
    default: "start",
  },
];

export const colProps: PropItem[] = [
  {
    name: "span",
    remark: "1-24 栏位",
    type: ["Number"],
    default: "24",
  },
  {
    name: "offset",
    remark: "偏移量",
    type: ["Number"],
    default: "0",
  },
  {
    name: "xs",
    remark: "<768px 响应式配置",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "sm",
    remark: "≥768px 响应式配置",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "md",
    remark: "≥992px 响应式配置",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "lg",
    remark: "≥1200px 响应式配置",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
  {
    name: "xl",
    remark: "≥1920px 响应式配置",
    type: ["ColResponsive"],
    optional: ["Number", "{ span: ColSpan; offset: ColOffset }"],
  },
];

export const rowSlots: SlotItem[] = [
  { name: "default", remark: "Row 内容" },
];

export const colSlots: SlotItem[] = [
  { name: "default", remark: "Col 内容" },
];
