import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const textareaProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["String"] },
  { name: "id", remark: "输入框 ID",
    remarkEn: "Input id", type: ["String"] },
  { name: "name", remark: "输入框名称",
    remarkEn: "Input name", type: ["String"] },
  { name: "placeholder", remark: "占位文本",
    remarkEn: "Placeholder", type: ["String"] },
  {
    name: "size",
    remark: "输入框尺寸",
    remarkEn: "Input size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "maxlength", remark: "最大输入长度",
    remarkEn: "Max length", type: ["Number"] },
  { name: "show-limit", remark: "是否显示字数限制",
    remarkEn: "Whether to show length limit", type: ["Boolean"], default: "false" },
  {
    name: "word-count-mode",
    remark: "字数统计模式",
    remarkEn: "Word-count mode",
    type: ["WordCountMode"],
    optional: ["default", "chinese-english", "custom"],
    default: "default",
  },
  { name: "custom-word-count", remark: "自定义字数统计函数",
    remarkEn: "Custom word-count function", type: ["Function"], default: "null" },
  { name: "readonly", remark: "是否只读",
    remarkEn: "Whether readonly", type: ["Boolean"], default: "false" },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: "false" },
  { name: "clearable", remark: "是否允许清空",
    remarkEn: "Whether clearable", type: ["Boolean"], default: "false" },
  { name: "rows", remark: "文本行数",
    remarkEn: "Number of rows", type: ["Number"], default: "3" },
];

export const textareaEvents: EventItem[] = [
  { name: "input", remark: "输入触发",
    remarkEn: "Triggered on input", params: "{ev: Event, value: String}" },
  { name: "focus", remark: "聚焦触发",
    remarkEn: "Triggered on focus", params: "ev: Event" },
  { name: "blur", remark: "失焦触发",
    remarkEn: "Triggered on blur", params: "ev: Event" },
  { name: "keypress", remark: "键入触发",
    remarkEn: "Triggered on keydown", params: "ev: Event" },
  { name: "keyup", remark: "键松触发",
    remarkEn: "Triggered on keyup", params: "ev: Event" },
];

export const textareaSlots: SlotItem[] = [{ name: "suffix", remark: "尾部内容",
    remarkEn: "Suffix content" }];

export const textareaMethods: MethodItem[] = [
  { name: "focus", remark: "聚焦",
    remarkEn: "Focus" },
  { name: "blur", remark: "失焦",
    remarkEn: "Blur" },
  { name: "clear", remark: "清空输入框",
    remarkEn: "Clear the input" },
];
