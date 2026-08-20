import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const statisticProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["Number"] },
  { name: "value", remark: "Value", type: ["Number"] },
  { name: "placeholder", remark: "Placeholder", type: ["String"], default: "--" },
  { name: "separator", remark: "Thousands separator", type: ["String"], default: "," },
  { name: "show-separator", remark: "Whether to show thousands separator", type: ["Boolean"], default: false },
  { name: "color", remark: "Text color", type: ["String"] },
  { name: "unit", remark: "Unit", type: ["String"] },
  { name: "precision", remark: "Decimal precision", type: ["Number"], default: 0 },
  { name: "font-size", remark: "Font size", type: ["String", "Array"], default: "26px" },
  { name: "animation", remark: "Whether to enable animation", type: ["Boolean"], default: false },
  { name: "duration", remark: "Animation duration", type: ["Number"], default: 1000 },
  { name: "value-from", remark: "Animation start value", type: ["Number"], default: 0 },
];

export const statisticSlots: SlotItem[] = [{ name: "prefix", remark: "Prefix content" }];
