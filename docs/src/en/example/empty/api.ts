import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const emptyProps: PropItem[] = [
  { name: "content", remark: "Empty-state text", type: ["String"], default: "No data" },
];

export const emptySlots: SlotItem[] = [{ name: "image", remark: "Custom empty icon or image" }];
