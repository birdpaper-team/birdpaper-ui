import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const linkProps: PropItem[] = [
  { name: "href", remark: "链接地址", type: ["String"] },
  {
    name: "status",
    remark: "状态类型",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "loading", remark: "是否加载中", type: ["Boolean"], default: false },
  {
    name: "loading-icon",
    remark: "加载图标",
    type: ["Number", "Icon"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  {
    name: "size",
    remark: "尺寸",
    type: ["String"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "icon", remark: "图标", type: ["Component"] },
  { name: "target", remark: "打开方式", type: ["String"], default: "_self" },
];

export const linkSlots: SlotItem[] = [{ name: "default", remark: "内容" }];
