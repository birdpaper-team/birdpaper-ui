import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const linkProps: PropItem[] = [
  { name: "href", remark: "链接地址",
    remarkEn: "Link href", type: ["String"] },
  {
    name: "status",
    remark: "状态类型",
    remarkEn: "Status type",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
  { name: "loading", remark: "是否加载中",
    remarkEn: "Whether loading", type: ["Boolean"], default: false },
  {
    name: "loading-icon",
    remark: "加载图标",
    remarkEn: "Loading icon",
    type: ["Number", "Icon"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  {
    name: "size",
    remark: "尺寸",
    remarkEn: "Size",
    type: ["String"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "icon", remark: "图标",
    remarkEn: "Icon", type: ["Component"] },
  { name: "target", remark: "打开方式",
    remarkEn: "Open target", type: ["String"], default: "_self" },
];

export const linkSlots: SlotItem[] = [{ name: "default", remark: "内容",
    remarkEn: "Content" }];
