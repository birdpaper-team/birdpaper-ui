import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const avatarProps: PropItem[] = [
  {
    name: "shape",
    remark: "Avatar shape",
    type: ["String"],
    optional: ["circle", "square"],
    default: "circle",
  },
  { name: "image-url", remark: "Image URL", type: ["String"] },
  {
    name: "object-fit",
    remark: "Image fit mode",
    type: ["String"],
    optional: ["fill", "contain", "cover", "none", "scale-down"],
    default: "cover",
  },
  {
    name: "size",
    remark: "Avatar size",
    type: ["String", "Number"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
];

export const avatarSlots: SlotItem[] = [
  { name: "default", remark: "Text or icon content" },
  { name: "loading", remark: "Content while image is loading" },
  { name: "error", remark: "Content when image fails to load" },
];
