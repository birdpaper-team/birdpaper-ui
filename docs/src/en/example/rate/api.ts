import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const rateProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["Number"], default: 0 },
  { name: "count", remark: "Total count", type: ["Number"], default: 5 },
  { name: "half", remark: "Whether half selection is allowed", type: ["Boolean"], default: false },
  { name: "readonly", remark: "Whether readonly", type: ["Boolean"], default: false },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
];

export const rateSlots: SlotItem[] = [{ name: "icon", remark: "Custom icon", params: "{ index: number }" }];
