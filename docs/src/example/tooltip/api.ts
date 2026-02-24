import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const tooltipProps: PropItem[] = [
  { name: "content", remark: "提示内容", type: ["String"], default: "" },
  {
    name: "trigger",
    remark: "触发方式",
    type: ["TriggerType"],
    optional: ["click", "hover"],
    default: "hover",
  },
  {
    name: "theme",
    remark: "主题",
    type: ["String"],
    optional: ["dark", "light"],
    default: "dark",
  },
];

export const tooltipSlots: SlotItem[] = [
  { name: "default", remark: "触发内容" },
  { name: "content", remark: "提示内容" },
];
