import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const alertProps: PropItem[] = [
  { name: "title", remark: "提示标题",
    remarkEn: "Alert title", type: ["String"], default: "" },
  { name: "content", remark: "详细描述内容",
    remarkEn: "Detailed description", type: ["String"], default: "" },
  {
    name: "status",
    remark: "提示状态类型",
    remarkEn: "Alert status type",
    type: ["String"],
    optional: ["info", "success", "warning", "danger"],
    default: "info",
  },
  { name: "icon", remark: "自定义图标组件",
    remarkEn: "Custom icon component", type: ["Component"] },
  { name: "hide-border", remark: "是否隐藏边框",
    remarkEn: "Whether to hide the border", type: ["Boolean"], default: false },
  { name: "hide-icon", remark: "是否隐藏图标",
    remarkEn: "Whether to hide icon", type: ["Boolean"], default: false },
  { name: "show-close", remark: "是否显示关闭按钮",
    remarkEn: "Whether to show close Button", type: ["Boolean"], default: false },
];

export const alertEvents: EventItem[] = [{ name: "close", remark: "关闭提示时触发",
    remarkEn: "Triggered when the alert is closed" }];

export const alertSlots: SlotItem[] = [
  { name: "content", remark: "自定义详细内容区域",
    remarkEn: "Custom description area" },
  { name: "close", remark: "自定义关闭按钮内容",
    remarkEn: "Custom close button content" },
];
