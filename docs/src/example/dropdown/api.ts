import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const dropdownProps: PropItem[] = [
  { name: "position", remark: "弹出位置", type: ["TriggerPosition"], default: "bottom" },
  { name: "trigger", remark: "触发方式", type: ["TriggerType"], default: "click" },
];

export const doptionProps: PropItem[] = [
  { name: "value", remark: "选项值", type: ["String", "Number"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
];

export const dropdownEvents: EventItem[] = [
  { name: "select", remark: "选中触发", params: "value?: DoptionValue" },
];

export const dropdownMethods: MethodItem[] = [
  { name: "open", remark: "打开下拉" },
  { name: "close", remark: "关闭下拉" },
];

export const dropdownSlots: SlotItem[] = [
  { name: "default", remark: "触发区域" },
  { name: "content", remark: "下拉内容" },
];

export const doptionSlots: SlotItem[] = [{ name: "default", remark: "选项内容" }];
