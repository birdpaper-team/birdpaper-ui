import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const emptyProps: PropItem[] = [
  { name: "content", remark: "空状态提示文本",
    remarkEn: "Empty-state text", type: ["String"], default: "暂无数据" },
];

export const emptySlots: SlotItem[] = [{ name: "image", remark: "自定义空状态图标或图片",
    remarkEn: "Custom empty icon or image" }];
