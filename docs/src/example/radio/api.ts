import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const radioProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["RadioValue"], optional: ["String", "Number", "Boolean"] },
  { name: "value", remark: "单选值", type: ["RadioValue"], optional: ["String", "Number", "Boolean"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
];

export const radioGroupProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["RadioValue"], optional: ["String", "Number", "Boolean"] },
  { name: "type", remark: "单选组类型", type: ["RadioType"], optional: ["radio", "button"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
  {
    name: "size",
    remark: "尺寸",
    type: ["ButtonSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "direction", remark: "单选组类型", type: ["DirectionType"], optional: ["vertical", "horizontal"] },
];

export const radioEvents: EventItem[] = [{ name: "change", remark: "单选值改变触发", params: "value:RadioValue" }];

export const radioSlots: SlotItem[] = [{ name: "default", remark: "内容" }];

export const radioGroupSlots: SlotItem[] = [{ name: "default", remark: "Radio 列表" }];
