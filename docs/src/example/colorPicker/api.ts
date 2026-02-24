import { PropItem } from "../../.vitepress/components/api-block/src/types";

export const colorPickerProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String"], default: "#165dff" },
  { name: "hide-trigger", remark: "是否隐藏触发器", type: ["Boolean"], default: false },
  {
    name: "value-type",
    remark: "颜色值类型",
    type: ["String"],
    optional: ["hex", "rgb"],
    default: "hex",
  },
  {
    name: "size",
    remark: "尺寸",
    type: ["String"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
];
