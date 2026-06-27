import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const alertProps: PropItem[] = [
  { name: "title", remark: "提示标题", type: ["String"], default: "" },
  { name: "content", remark: "详细描述内容", type: ["String"], default: "" },
  {
    name: "status",
    remark: "提示状态类型",
    type: ["String"],
    optional: ["info", "success", "warning", "danger"],
    default: "info",
  },
  { name: "icon", remark: "自定义图标组件", type: ["Component"] },
  { name: "hide-border", remark: "是否隐藏边框", type: ["Boolean"], default: false },
  { name: "hide-icon", remark: "是否隐藏图标", type: ["Boolean"], default: false },
  { name: "show-close", remark: "是否显示关闭按钮", type: ["Boolean"], default: false },
];

export const alertEvents: EventItem[] = [{ name: "close", remark: "关闭提示时触发" }];

export const alertSlots: SlotItem[] = [
  { name: "content", remark: "自定义详细内容区域" },
  { name: "close", remark: "自定义关闭按钮内容" },
];
