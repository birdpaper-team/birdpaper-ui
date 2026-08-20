import { PropItem } from "../../.vitepress/components/api-block/src/types";

export const Iconprops: PropItem[] = [
  {
    name: "size",
    remark: "图标尺寸",
    remarkEn: "Icon size",
    type: ["String"],
    default: "18px",
  },
  { name: "fill", remark: "填充颜色",
    remarkEn: "Fill color", type: ["String"], default: "#595959" },
  { name: "spin", remark: "是否持续旋转",
    remarkEn: "Whether to spin continuously", type: ["Boolean"], default: "false" },
  { name: "rotate", remark: "旋转角度",
    remarkEn: "Rotation angle", type: ["Number"] },
];

export const IconAppends: PropItem[] = [
  {
    name: "iconType",
    remark: "图标类型数组",
    remarkEn: "Icon type array",
    type: ["String[]"],
  },
  { name: "iconInfo", remark: "图标枚举",
    remarkEn: "Icon enum", type: ["Array<{name:string, list:string[]}>"] },
  { name: "iconNumbers", remark: "图标数量",
    remarkEn: "Icon count", type: ["Number"] },
];
