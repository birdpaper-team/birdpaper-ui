import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const tagProps: PropItem[] = [
  { name: "icon", remark: "图标组件",
    remarkEn: "Icon component", type: ["Component"] },
  {
    name: "status",
    remark: "标签状态",
    remarkEn: "Tag status",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "gray",
  },
  { name: "border", remark: "是否显示边框",
    remarkEn: "Whether bordered", type: ["Boolean"], default: false },
  { name: "closeable", remark: "是否可关闭",
    remarkEn: "Whether closable", type: ["Boolean"], default: false },
];

export const tagEvents: EventItem[] = [{ name: "close", remark: "点击关闭按钮时触发",
    remarkEn: "Triggered when the close button is clicked" }];

export const tagSlots: SlotItem[] = [{ name: "default", remark: "标签内容",
    remarkEn: "Label content" }];
