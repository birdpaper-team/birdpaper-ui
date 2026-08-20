import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const avatarProps: PropItem[] = [
  {
    name: "shape",
    remark: "头像形状",
    remarkEn: "Avatar shape",
    type: ["String"],
    optional: ["circle", "square"],
    default: "circle",
  },
  { name: "image-url", remark: "图片地址",
    remarkEn: "Image URL", type: ["String"] },
  {
    name: "object-fit",
    remark: "图片填充方式",
    remarkEn: "Image fit mode",
    type: ["String"],
    optional: ["fill", "contain", "cover", "none", "scale-down"],
    default: "cover",
  },
  {
    name: "size",
    remark: "头像尺寸",
    remarkEn: "Avatar size",
    type: ["String", "Number"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
];

export const avatarSlots: SlotItem[] = [
  { name: "default", remark: "文字/图标内容",
    remarkEn: "Text or icon content" },
  { name: "loading", remark: "图片加载中内容",
    remarkEn: "Content while image is loading" },
  { name: "error", remark: "图片加载失败内容",
    remarkEn: "Content when image fails to load" },
];
