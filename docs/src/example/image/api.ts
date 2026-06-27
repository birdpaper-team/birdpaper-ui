import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const imageProps: PropItem[] = [
  { name: "src", remark: "图片资源地址", type: ["String"], default: "" },
  { name: "alt", remark: "图片替代文本", type: ["String"], default: "" },
  { name: "title", remark: "图片标题", type: ["String"], default: "" },
  { name: "width", remark: "图片宽度，支持 CSS 单位", type: ["String"] },
  { name: "height", remark: "图片高度，支持 CSS 单位", type: ["String"] },
  {
    name: "fit",
    remark: "图片填充方式，同 CSS object-fit",
    type: ["String"],
    optional: ["fill", "contain", "cover", "none", "scale-down"],
    default: "fill",
  },
  { name: "fallback", remark: "加载失败时的兜底图片地址", type: ["String"], default: "" },
  { name: "lazy", remark: "是否开启懒加载", type: ["Boolean"], default: false },
  { name: "placeholder", remark: "懒加载时的占位图片地址", type: ["String"], default: "" },
  {
    name: "load-effect",
    remark: "图片加载完成的动画效果",
    type: ["String"],
    optional: ["fade", "blur", "none"],
    default: "fade",
  },
];

export const imageEvents: EventItem[] = [
  { name: "load", remark: "图片加载完成时触发", params: "ev: Event" },
  { name: "error", remark: "图片加载失败时触发", params: "ev: Event" },
];

export const imageSlots: SlotItem[] = [
  { name: "loading", remark: "图片加载中的占位内容" },
  { name: "error", remark: "图片加载失败的展示内容" },
];
