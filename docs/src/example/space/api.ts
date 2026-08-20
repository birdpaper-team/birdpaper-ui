import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const spaceProps: PropItem[] = [
  {
    name: "size",
    remark: "栏位间隔",
    remarkEn: "Gutter",
    type: ["String", "Number"],
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
  {
    name: "type",
    remark: "类型",
    remarkEn: "Type",
    type: ["SpaceType"],
    optional: ["vertical", "horizontal"],
    default: "horizontal",
  },
  {
    name: "justify",
    remark: "水平对齐方式",
    remarkEn: "Horizontal alignment",
    type: ["String"],
    default: "flex-start",
  },
  {
    name: "align",
    remark: "纵向对齐方式",
    remarkEn: "Vertical alignment",
    type: ["String"],
    default: "flex-start",
  },
];

export const spaceSlots: SlotItem[] = [
  { name: "default", remark: "内容",
    remarkEn: "Content" },
  { name: "split", remark: "分隔符内容",
    remarkEn: "Separator content" },
];
