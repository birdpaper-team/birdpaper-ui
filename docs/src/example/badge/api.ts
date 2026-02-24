import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const badgeProps: PropItem[] = [
  { name: "text", remark: "自定义文本", type: ["String"] },
  { name: "count", remark: "数值", type: ["Number"], default: 0 },
  { name: "max-count", remark: "最大显示数值", type: ["Number"], default: 99 },
  { name: "dot", remark: "是否显示小圆点", type: ["Boolean"], default: false },
  {
    name: "status",
    remark: "状态类型",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  { name: "offset", remark: "偏移量", type: ["Array"], default: "[-2, -6]" },
];

export const badgeSlots: SlotItem[] = [{ name: "default", remark: "内容" }];
