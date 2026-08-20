import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const statisticProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["Number"] },
  { name: "value", remark: "数值",
    remarkEn: "Value", type: ["Number"] },
  { name: "placeholder", remark: "占位文本",
    remarkEn: "Placeholder", type: ["String"], default: "--" },
  { name: "separator", remark: "千分位分隔符",
    remarkEn: "Thousands separator", type: ["String"], default: "," },
  { name: "show-separator", remark: "是否显示千分位",
    remarkEn: "Whether to show thousands separator", type: ["Boolean"], default: false },
  { name: "color", remark: "文字颜色",
    remarkEn: "Text color", type: ["String"] },
  { name: "unit", remark: "单位",
    remarkEn: "Unit", type: ["String"] },
  { name: "precision", remark: "小数精度",
    remarkEn: "Decimal precision", type: ["Number"], default: 0 },
  { name: "font-size", remark: "字体大小",
    remarkEn: "Font size", type: ["String", "Array"], default: "26px" },
  { name: "animation", remark: "是否开启动画",
    remarkEn: "Whether to enable animation", type: ["Boolean"], default: false },
  { name: "duration", remark: "动画时长",
    remarkEn: "Animation duration", type: ["Number"], default: 1000 },
  { name: "value-from", remark: "动画起始值",
    remarkEn: "Animation start value", type: ["Number"], default: 0 },
];

export const statisticSlots: SlotItem[] = [{ name: "prefix", remark: "前缀内容",
    remarkEn: "Prefix content" }];
