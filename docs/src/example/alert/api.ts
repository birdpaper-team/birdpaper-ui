import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const alertProps: PropItem[] = [
  { name: "title", remark: "标题", type: ["String"], default: "" },
  { name: "content", remark: "内容", type: ["String"], default: "" },
  {
    name: "status",
    remark: "状态类型",
    type: ["String"],
    optional: ["success", "warning", "danger", "info"],
    default: "info",
  },
  { name: "icon", remark: "自定义图标", type: ["Component"] },
  { name: "hide-border", remark: "是否隐藏边框", type: ["Boolean"], default: false },
  { name: "hide-icon", remark: "是否隐藏图标", type: ["Boolean"], default: false },
  { name: "show-close", remark: "是否显示关闭按钮", type: ["Boolean"], default: false },
];

export const alertEvents: EventItem[] = [{ name: "close", remark: "关闭时触发", params: "" }];

export const alertSlots: SlotItem[] = [
  { name: "content", remark: "内容区域" },
  { name: "close", remark: "关闭按钮内容" },
];
