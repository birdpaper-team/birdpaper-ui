import { PropItem } from "../../.vitepress/components/api-block/src/types";

export const colorPickerProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["String"], default: "#165dff" },
  { name: "hide-trigger", remark: "是否隐藏触发器",
    remarkEn: "Whether to hide the trigger", type: ["Boolean"], default: false },
  {
    name: "value-type",
    remark: "颜色值类型",
    remarkEn: "Color value type",
    type: ["String"],
    optional: ["hex", "rgb"],
    default: "hex",
  },
  {
    name: "size",
    remark: "尺寸",
    remarkEn: "Size",
    type: ["String"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
];
