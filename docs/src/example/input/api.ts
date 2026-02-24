import { EventItem, MethodItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const inputProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String"] },
  { name: "id", remark: "输入框 ID", type: ["String"] },
  { name: "name", remark: "输入框名称", type: ["String"] },
  { name: "type", remark: "输入框类型", type: ["InputType"], optional: ["text", "password"], default: "text" },
  { name: "placeholder", remark: "占位文本", type: ["String"] },
  {
    name: "size",
    remark: "输入框尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "maxlength", remark: "最大输入长度", type: ["Number"] },
  { name: "show-limit", remark: "是否显示字数限制", type: ["Boolean"], default: 'false' },
  {
    name: "word-count-mode",
    remark: "字数统计模式",
    type: ["WordCountMode"],
    optional: ["default", "chinese-english", "custom"],
    default: "default",
  },
  { name: "custom-word-count", remark: "自定义字数统计函数", type: ["Function"] },
  { name: "show-password", remark: "是否显示密码控制", type: ["Boolean"], default: 'true' },
  { name: "readonly", remark: "是否只读", type: ["Boolean"], default: 'false' },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: 'false' },
  { name: "clearable", remark: "是否允许清空", type: ["Boolean"], default: 'false' },
  { name: "is-round", remark: "是否圆角", type: ["Boolean"], default: 'false' },
  { name: "auto-focus", remark: "是否自动聚焦", type: ["Boolean"], default: 'false' },
];

export const inputEvents: EventItem[] = [
  { name: "input", remark: "输入触发", params: "{ev: Event, value: String}" },
  { name: "focus", remark: "聚焦触发", params: "ev: Event" },
  { name: "blur", remark: "失焦触发", params: "ev: Event" },
  { name: "keypress", remark: "键入触发", params: "ev: Event" },
  { name: "keyup", remark: "键松触发", params: "ev: Event" },
  { name: "enter", remark: "回车触发", params: "{ev: Event, value: String}" },
];

export const inputSlots: SlotItem[] = [
  { name: "default", remark: "自定义输入内容" },
  { name: "prefix", remark: "头部元素" },
  { name: "suffix", remark: "尾部元素" },
];

export const inputMethods: MethodItem[] = [
  { name: "focus", remark: "聚焦" },
  { name: "blur", remark: "失焦" },
  { name: "triggerEye", remark: "切换明文/匿文", returns: "切换后状态{Boolean}" },
  { name: "clear", remark: "清空输入框" },
];
