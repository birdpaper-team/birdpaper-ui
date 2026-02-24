import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const spinProps: PropItem[] = [
  { name: "spinning", remark: "是否加载中", type: ["Boolean"], default: true },
  {
    name: "spin-icon",
    remark: "加载图标",
    type: ["Number", "Component"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  { name: "description", remark: "描述文本", type: ["String"], default: "" },
];

export const spinSlots: SlotItem[] = [{ name: "default", remark: "包裹内容" }];
