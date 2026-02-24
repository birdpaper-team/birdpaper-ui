import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const rateProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["Number"], default: 0 },
  { name: "count", remark: "总数", type: ["Number"], default: 5 },
  { name: "half", remark: "是否支持半选", type: ["Boolean"], default: false },
  { name: "readonly", remark: "是否只读", type: ["Boolean"], default: false },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
];

export const rateSlots: SlotItem[] = [{ name: "icon", remark: "自定义图标", params: "{ index: number }" }];
