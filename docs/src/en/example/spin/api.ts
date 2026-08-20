import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const spinProps: PropItem[] = [
  { name: "spinning", remark: "Whether in loading state", type: ["Boolean"], default: true },
  {
    name: "spin-icon",
    remark: "Loading icon; 1–5 are built-in, or pass a custom component",
    type: ["Number", "Component"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  { name: "description", remark: "Loading description", type: ["String"], default: "" },
];

export const spinSlots: SlotItem[] = [{ name: "default", remark: "Wrapped content; Spin overlays it as a mask" }];
