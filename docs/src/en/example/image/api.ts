import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const imageProps: PropItem[] = [
  { name: "src", remark: "Image source URL", type: ["String"], default: "" },
  { name: "alt", remark: "Alt text", type: ["String"], default: "" },
  { name: "title", remark: "Image title", type: ["String"], default: "" },
  { name: "width", remark: "Image width (CSS units supported)", type: ["String"] },
  { name: "height", remark: "Image height (CSS units supported)", type: ["String"] },
  {
    name: "fit",
    remark: "Object-fit mode (same as CSS object-fit)",
    type: ["String"],
    optional: ["fill", "contain", "cover", "none", "scale-down"],
    default: "fill",
  },
  { name: "fallback", remark: "Fallback image URL on error", type: ["String"], default: "" },
  { name: "lazy", remark: "Whether to enable lazy loading", type: ["Boolean"], default: false },
  { name: "placeholder", remark: "Placeholder image URL for lazy loading", type: ["String"], default: "" },
  {
    name: "load-effect",
    remark: "Load animation effect",
    type: ["String"],
    optional: ["fade", "blur", "none"],
    default: "fade",
  },
];

export const imageEvents: EventItem[] = [
  { name: "load", remark: "Triggered when the image finishes loading", params: "ev: Event" },
  { name: "error", remark: "Triggered when the image fails to load", params: "ev: Event" },
];

export const imageSlots: SlotItem[] = [
  { name: "loading", remark: "Placeholder while loading" },
  { name: "error", remark: "Content shown on load error" },
];
