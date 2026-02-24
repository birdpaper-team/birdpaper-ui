import { PropItem } from "../../.vitepress/components/api-block/src/types";

export const commonPickerProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String"] },
  { name: "name", remark: "选择器名称", type: ["String"] },
  {
    name: "size",
    remark: "输入框尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "placeholder", remark: "占位文本", type: ["String"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
  { name: "disabled-date", remark: "不可选日期", type: ["(value: string) => boolean"] },
  { name: "clearable", remark: "是否允许清空", type: ["Boolean"], default: "false" },
  { name: "hide-trigger", remark: "是否仅展示面板", type: ["Boolean"], default: "false" },
  { name: "langs", remark: "语言", type: ["LangsType"], optional: ["en", "zh-cn"], default: "zh-cn" },
];

export const datePickerProps: PropItem[] = [
  {
    name: "value-format",
    remark: "值的格式",
    type: ["String"],
    default: "YYYY-MM-DD",
  },
  { name: "show-time", remark: "允许选择时间", type: ["Boolean"], default: false },
];


export const monthPickerProps: PropItem[] = [
  {
    name: "value-format",
    remark: "值的格式",
    type: ["String"],
    default: "YYYY-MM",
  },
];

export const yearPickerProps: PropItem[] = [
  {
    name: "value-format",
    remark: "值的格式",
    type: ["String"],
    default: "YYYY",
  },
];

export const rangePickerProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String[]"] },
  { name: "placeholder", remark: "占位文本", type: ["String[]"], default: "['', '']" },
  {
    name: "size",
    remark: "输入框尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
  { name: "disabled-date", remark: "不可选日期", type: ["(value: string) => boolean"] },
  { name: "hide-trigger", remark: "是否仅展示面板", type: ["Boolean"], default: "false" },
  { name: "langs", remark: "语言", type: ["LangsType"], optional: ["en", "zh-cn"], default: "zh-cn" },
  { name: "value-format", remark: "值的格式", type: ["String"], default: "YYYY-MM-DD" },
];
