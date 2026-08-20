import { EventItem, MethodItem, PropItem } from "../../../.vitepress/components/api-block/src/types";

export const verifyCodeProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["String"] },
  { name: "type", remark: "Input type", type: ["InputType"], optional: ["text", "password"], default: "text" },
  {
    name: "size",
    remark: "Input size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "length", remark: "Verification code length", type: ["Number"], default: "6" },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: "false" },
  { name: "readonly", remark: "Whether readonly", type: ["Boolean"], default: "false" },
];

export const verifyCodeEvents: EventItem[] = [{ name: "finish", remark: "Triggered when input is complete" }];

export const verifyCodeMethods: MethodItem[] = [{ name: "focus", remark: "Focus" }];
