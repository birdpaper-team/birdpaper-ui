import { EventItem, MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const inputNumberProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["Number", "String"] },
  { name: "id", remark: "输入框 ID",
    remarkEn: "Input id", type: ["String"] },
  { name: "name", remark: "输入框名称",
    remarkEn: "Input name", type: ["String"] },
  { name: "placeholder", remark: "占位文本",
    remarkEn: "Placeholder", type: ["String"], default: "" },
  {
    name: "size",
    remark: "输入框尺寸",
    remarkEn: "Input size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "unit", remark: "单位",
    remarkEn: "Unit", type: ["String"] },
  { name: "hide-button", remark: "是否隐藏步进按钮",
    remarkEn: "Whether to hide step buttons", type: ["Boolean"], default: false },
  { name: "precision", remark: "小数精度",
    remarkEn: "Decimal precision", type: ["Number"] },
  { name: "step", remark: "步进值",
    remarkEn: "Step value", type: ["Number"], default: 1 },
  { name: "min", remark: "最小值",
    remarkEn: "Min value", type: ["Number"], default: "Number.MIN_SAFE_INTEGER" },
  { name: "max", remark: "最大值",
    remarkEn: "Max value", type: ["Number"], default: "Number.MAX_SAFE_INTEGER" },
  { name: "readonly", remark: "是否只读",
    remarkEn: "Whether readonly", type: ["Boolean"], default: false },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
  { name: "nan-to-zero", remark: "NaN 是否转为 0",
    remarkEn: "Whether to convert NaN to 0", type: ["Boolean"], default: false },
  {
    name: "model-event",
    remark: "触发更新事件",
    remarkEn: "Triggered on update",
    type: ["String"],
    optional: ["input", "change"],
    default: "input",
  },
];

export const inputNumberEvents: EventItem[] = [
  { name: "input", remark: "输入触发",
    remarkEn: "Triggered on input", params: "value: Number" },
  { name: "blur", remark: "失焦触发",
    remarkEn: "Triggered on blur", params: "--" },
  { name: "step", remark: "步进触发",
    remarkEn: "Triggered on step", params: "value: Number" },
];

export const inputNumberMethods: MethodItem[] = [
  { name: "focus", remark: "聚焦",
    remarkEn: "Focus" },
  { name: "blur", remark: "失焦",
    remarkEn: "Blur" },
  { name: "getStringValue", remark: "获取格式化字符串",
    remarkEn: "Get the formatted string" },
];
