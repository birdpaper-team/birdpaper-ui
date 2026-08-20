import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const spaceProps: PropItem[] = [
  {
    name: "size",
    remark: "Gutter",
    type: ["String", "Number"],
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
  {
    name: "type",
    remark: "Type",
    type: ["SpaceType"],
    optional: ["vertical", "horizontal"],
    default: "horizontal",
  },
  {
    name: "justify",
    remark: "Horizontal alignment",
    type: ["String"],
    default: "flex-start",
  },
  {
    name: "align",
    remark: "Vertical alignment",
    type: ["String"],
    default: "flex-start",
  },
];

export const spaceSlots: SlotItem[] = [
  { name: "default", remark: "Content" },
  { name: "split", remark: "Separator content" },
];
