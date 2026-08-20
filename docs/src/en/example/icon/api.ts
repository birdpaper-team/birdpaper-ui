import { PropItem } from "../../../.vitepress/components/api-block/src/types";

export const Iconprops: PropItem[] = [
  {
    name: "size",
    remark: "Icon size",
    type: ["String"],
    default: "18px",
  },
  { name: "fill", remark: "Fill color", type: ["String"], default: "#595959" },
  { name: "spin", remark: "Whether to spin continuously", type: ["Boolean"], default: "false" },
  { name: "rotate", remark: "Rotation angle", type: ["Number"] },
];

export const IconAppends: PropItem[] = [
  {
    name: "iconType",
    remark: "Icon type array",
    type: ["String[]"],
  },
  { name: "iconInfo", remark: "Icon enum", type: ["Array<{name:string, list:string[]}>"] },
  { name: "iconNumbers", remark: "Icon count", type: ["Number"] },
];
