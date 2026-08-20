import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const dropdownProps: PropItem[] = [
  { name: "position", remark: "弹出位置",
    remarkEn: "Popup position", type: ["TriggerPosition"], default: "bottom" },
  { name: "trigger", remark: "触发方式",
    remarkEn: "Trigger", type: ["TriggerType"], default: "click" },
];

export const doptionProps: PropItem[] = [
  { name: "value", remark: "选项值",
    remarkEn: "Option value", type: ["String", "Number"] },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
];

export const dropdownEvents: EventItem[] = [
  { name: "select", remark: "选中触发",
    remarkEn: "Triggered on select", params: "value?: DoptionValue" },
];

export const dropdownMethods: MethodItem[] = [
  { name: "open", remark: "打开下拉",
    remarkEn: "Open the dropdown" },
  { name: "close", remark: "关闭下拉",
    remarkEn: "Close the dropdown" },
];

export const dropdownSlots: SlotItem[] = [
  { name: "default", remark: "触发区域",
    remarkEn: "Trigger area" },
  { name: "content", remark: "下拉内容",
    remarkEn: "Dropdown content" },
];

export const doptionSlots: SlotItem[] = [{ name: "default", remark: "选项内容",
    remarkEn: "Option content" }];
