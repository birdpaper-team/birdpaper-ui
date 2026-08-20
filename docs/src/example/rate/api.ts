import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const rateProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["Number"], default: 0 },
  { name: "count", remark: "总数",
    remarkEn: "Total count", type: ["Number"], default: 5 },
  { name: "half", remark: "是否支持半选",
    remarkEn: "Whether half selection is allowed", type: ["Boolean"], default: false },
  { name: "readonly", remark: "是否只读",
    remarkEn: "Whether readonly", type: ["Boolean"], default: false },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
];

export const rateSlots: SlotItem[] = [{ name: "icon", remark: "自定义图标",
    remarkEn: "Custom icon", params: "{ index: number }" }];
