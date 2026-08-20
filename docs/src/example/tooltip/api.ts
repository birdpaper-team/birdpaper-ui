import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const tooltipProps: PropItem[] = [
  { name: "content", remark: "提示文本内容",
    remarkEn: "Tooltip text", type: ["String"], default: "" },
  {
    name: "trigger",
    remark: "触发方式",
    remarkEn: "Trigger",
    type: ["TriggerType"],
    optional: ["click", "hover"],
    default: "hover",
  },
  {
    name: "theme",
    remark: "提示框主题风格",
    remarkEn: "Tooltip theme",
    type: ["String"],
    optional: ["dark", "light"],
    default: "dark",
  },
  {
    name: "position",
    remark: "弹出位置",
    remarkEn: "Popup position",
    type: ["String"],
    optional: ["top", "bottom"],
    default: "top",
  },
];

export const tooltipSlots: SlotItem[] = [
  { name: "default", remark: "触发弹出的元素",
    remarkEn: "Element that triggers the popup" },
  { name: "content", remark: "自定义提示内容",
    remarkEn: "Custom tooltip content" },
];
