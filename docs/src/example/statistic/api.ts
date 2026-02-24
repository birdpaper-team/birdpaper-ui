import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const statisticProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["Number"] },
  { name: "value", remark: "数值", type: ["Number"] },
  { name: "placeholder", remark: "占位文本", type: ["String"], default: "--" },
  { name: "separator", remark: "千分位分隔符", type: ["String"], default: "," },
  { name: "show-separator", remark: "是否显示千分位", type: ["Boolean"], default: false },
  { name: "color", remark: "文字颜色", type: ["String"] },
  { name: "unit", remark: "单位", type: ["String"] },
  { name: "precision", remark: "小数精度", type: ["Number"], default: 0 },
  { name: "font-size", remark: "字体大小", type: ["String", "Array"], default: "26px" },
  { name: "animation", remark: "是否开启动画", type: ["Boolean"], default: false },
  { name: "duration", remark: "动画时长", type: ["Number"], default: 1000 },
  { name: "value-from", remark: "动画起始值", type: ["Number"], default: 0 },
];

export const statisticSlots: SlotItem[] = [{ name: "prefix", remark: "前缀内容" }];
