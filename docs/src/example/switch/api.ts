import { PropItem } from "../../.vitepress/components/api-block/src/types";

export const switchProps: PropItem[] = [
  {
    name: "v-model",
    remark: "绑定值",
    type: ["SwitchValue"],
    optional: ["String", "Number", "Boolean"],
  },
  { name: "id", remark: "输入框 ID", type: ["String"] },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  {
    name: "size",
    remark: "尺寸",
    type: ["SwitchSize"],
    optional: ["mini", "small"],
    default: "small",
  },
  {
    name: "check-value",
    remark: "开启时的值",
    type: ["SwitchValue"],
    optional: ["String", "Number", "Boolean"],
    default: "true",
  },
  {
    name: "uncheck-value",
    remark: "开启时的值",
    type: ["SwitchValue"],
    optional: ["String", "Number", "Boolean"],
    default: "false",
  },
  { name: "check-text", remark: "开启时的文案", type: ["String"] },
  { name: "uncheck-text", remark: "开启时的文案", type: ["String"] },
  {
    name: "on-before-ok",
    remark: "触发ok前的回调，返回布尔值控制开关状态",
    type: ["()=>void | boolean | Promise<void | boolean>"],
  },
];
