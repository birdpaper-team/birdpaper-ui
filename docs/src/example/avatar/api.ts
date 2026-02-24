import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const avatarProps: PropItem[] = [
  {
    name: "shape",
    remark: "头像形状",
    type: ["String"],
    optional: ["circle", "square"],
    default: "circle",
  },
  { name: "image-url", remark: "图片地址", type: ["String"] },
  {
    name: "object-fit",
    remark: "图片填充方式",
    type: ["String"],
    optional: ["fill", "contain", "cover", "none", "scale-down"],
    default: "cover",
  },
  {
    name: "size",
    remark: "头像尺寸",
    type: ["String", "Number"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
];

export const avatarSlots: SlotItem[] = [
  { name: "default", remark: "文字/图标内容" },
  { name: "loading", remark: "图片加载中内容" },
  { name: "error", remark: "图片加载失败内容" },
];
