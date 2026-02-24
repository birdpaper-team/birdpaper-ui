import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const emptyProps: PropItem[] = [
  { name: "content", remark: "内容文本", type: ["String"], default: "暂无数据" },
];

export const emptySlots: SlotItem[] = [{ name: "image", remark: "自定义图标/图片" }];
