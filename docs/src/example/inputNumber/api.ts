import { EventItem, MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const inputNumberProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["Number", "String"] },
  { name: "id", remark: "输入框 ID", type: ["String"] },
  { name: "name", remark: "输入框名称", type: ["String"] },
  { name: "placeholder", remark: "占位文本", type: ["String"], default: "" },
  {
    name: "size",
    remark: "输入框尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "unit", remark: "单位", type: ["String"] },
  { name: "hide-button", remark: "是否隐藏步进按钮", type: ["Boolean"], default: false },
  { name: "precision", remark: "小数精度", type: ["Number"] },
  { name: "step", remark: "步进值", type: ["Number"], default: 1 },
  { name: "min", remark: "最小值", type: ["Number"], default: "Number.MIN_SAFE_INTEGER" },
  { name: "max", remark: "最大值", type: ["Number"], default: "Number.MAX_SAFE_INTEGER" },
  { name: "readonly", remark: "是否只读", type: ["Boolean"], default: false },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "nan-to-zero", remark: "NaN 是否转为 0", type: ["Boolean"], default: false },
  {
    name: "model-event",
    remark: "触发更新事件",
    type: ["String"],
    optional: ["input", "change"],
    default: "input",
  },
];

export const inputNumberEvents: EventItem[] = [
  { name: "input", remark: "输入触发", params: "value: Number" },
  { name: "blur", remark: "失焦触发", params: "--" },
  { name: "step", remark: "步进触发", params: "value: Number" },
];

export const inputNumberMethods: MethodItem[] = [
  { name: "focus", remark: "聚焦" },
  { name: "blur", remark: "失焦" },
  { name: "getStringValue", remark: "获取格式化字符串" },
];
