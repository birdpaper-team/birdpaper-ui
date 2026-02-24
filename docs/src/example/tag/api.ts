import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const tagProps: PropItem[] = [
  { name: "icon", remark: "图标", type: ["Component"] },
  {
    name: "status",
    remark: "状态",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "gray",
  },
  { name: "border", remark: "是否显示边框", type: ["Boolean"], default: false },
  { name: "closeable", remark: "是否可关闭", type: ["Boolean"], default: false },
];

export const tagEvents: EventItem[] = [{ name: "close", remark: "关闭触发" }];

export const tagSlots: SlotItem[] = [{ name: "default", remark: "内容" }];
