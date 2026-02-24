import { EventItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const timePickerProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String"], default: "" },
  { name: "name", remark: "输入框名称", type: ["String"] },
  { name: "placeholder", remark: "占位文本", type: ["String"], default: "" },
  {
    name: "size",
    remark: "尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "clearable", remark: "是否可清空", type: ["Boolean"], default: false },
  { name: "value-format", remark: "值格式", type: ["String"], default: "YYYY-MM-DD" },
  { name: "hide-trigger", remark: "是否隐藏触发器", type: ["Boolean"], default: false },
];

export const timePickerEvents: EventItem[] = [
  { name: "input", remark: "输入触发" },
  { name: "blur", remark: "失焦触发" },
];
