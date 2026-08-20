import { PropItem } from "../../../.vitepress/components/api-block/src/types";

export const switchProps: PropItem[] = [
  {
    name: "v-model",
    remark: "Bound value",
    type: ["SwitchValue"],
    optional: ["String", "Number", "Boolean"],
  },
  { name: "id", remark: "Input id", type: ["String"] },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  {
    name: "size",
    remark: "Size",
    type: ["SwitchSize"],
    optional: ["mini", "small"],
    default: "small",
  },
  {
    name: "check-value",
    remark: "Value when checked",
    type: ["SwitchValue"],
    optional: ["String", "Number", "Boolean"],
    default: "true",
  },
  {
    name: "uncheck-value",
    remark: "Value when checked",
    type: ["SwitchValue"],
    optional: ["String", "Number", "Boolean"],
    default: "false",
  },
  { name: "check-text", remark: "Text when checked", type: ["String"] },
  { name: "uncheck-text", remark: "Text when checked", type: ["String"] },
  {
    name: "on-before-ok",
    remark: "Callback before toggle; return boolean to control the switch",
    type: ["()=>void | boolean | Promise<void | boolean>"],
  },
];
