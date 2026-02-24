import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const imageProps: PropItem[] = [
  { name: "src", remark: "图片地址", type: ["String"], default: "" },
  { name: "alt", remark: "替代文本", type: ["String"], default: "" },
  { name: "title", remark: "标题", type: ["String"], default: "" },
  { name: "width", remark: "宽度", type: ["String"] },
  { name: "height", remark: "高度", type: ["String"] },
  {
    name: "fit",
    remark: "填充方式",
    type: ["String"],
    optional: ["fill", "contain", "cover", "none", "scale-down"],
    default: "fill",
  },
  { name: "fallback", remark: "加载失败兜底图片", type: ["String"], default: "" },
  { name: "lazy", remark: "是否懒加载", type: ["Boolean"], default: false },
  { name: "placeholder", remark: "懒加载占位图", type: ["String"], default: "" },
  {
    name: "load-effect",
    remark: "加载动画效果",
    type: ["String"],
    optional: ["fade", "blur", "none"],
    default: "fade",
  },
];

export const imageEvents: EventItem[] = [
  { name: "load", remark: "加载完成", params: "ev: Event" },
  { name: "error", remark: "加载失败", params: "ev: Event" },
];

export const imageSlots: SlotItem[] = [
  { name: "loading", remark: "加载中内容" },
  { name: "error", remark: "加载失败内容" },
];
