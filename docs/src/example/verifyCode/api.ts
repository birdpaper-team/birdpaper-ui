import { EventItem, MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const verifyCodeProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["String"] },
  { name: "type", remark: "输入框类型",
    remarkEn: "Input type", type: ["InputType"], optional: ["text", "password"], default: "text" },
  {
    name: "size",
    remark: "输入框尺寸",
    remarkEn: "Input size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "length", remark: "验证码长度",
    remarkEn: "Verification code length", type: ["Number"], default: "6" },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: "false" },
  { name: "readonly", remark: "是否只读",
    remarkEn: "Whether readonly", type: ["Boolean"], default: "false" },
];

export const verifyCodeEvents: EventItem[] = [{ name: "finish", remark: "输入完成触发",
    remarkEn: "Triggered when input is complete" }];

export const verifyCodeMethods: MethodItem[] = [{ name: "focus", remark: "聚焦",
    remarkEn: "Focus" }];
