import { EventItem, MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const verifyCodeProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String"] },
  { name: "type", remark: "输入框类型", type: ["InputType"], optional: ["text", "password"], default: "text" },
  {
    name: "size",
    remark: "输入框尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "length", remark: "验证码长度", type: ["Number"], default: "6" },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: "false" },
  { name: "readonly", remark: "是否只读", type: ["Boolean"], default: "false" },
];

export const verifyCodeEvents: EventItem[] = [{ name: "finish", remark: "输入完成触发" }];

export const verifyCodeMethods: MethodItem[] = [{ name: "focus", remark: "聚焦" }];
