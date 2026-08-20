import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const spinProps: PropItem[] = [
  { name: "spinning", remark: "是否为加载中状态",
    remarkEn: "Whether in loading state", type: ["Boolean"], default: true },
  {
    name: "spin-icon",
    remark: "加载图标，1-5 为内置图标，也可传入自定义组件",
    remarkEn: "Loading icon; 1–5 are built-in, or pass a custom component",
    type: ["Number", "Component"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  { name: "description", remark: "加载描述文本",
    remarkEn: "Loading description", type: ["String"], default: "" },
];

export const spinSlots: SlotItem[] = [{ name: "default", remark: "被包裹的内容，传入后 Spin 以遮罩形式覆盖",
    remarkEn: "Wrapped content; Spin overlays it as a mask" }];
