import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const triggerProps: PropItem[] = [
  { name: "v-model", remark: "是否显示", type: ["Boolean"], default: false },
  {
    name: "trigger",
    remark: "触发方式",
    type: ["TriggerType"],
    optional: ["click", "hover"],
    default: "click",
  },
  { name: "position", remark: "弹出位置", type: ["TriggerPosition"], default: "bottom" },
  { name: "popup-offset", remark: "弹出偏移", type: ["Number"], default: 0 },
  { name: "popup-translate", remark: "弹出平移", type: ["Array"], default: "[0, 0]" },
  { name: "auto-fit-width", remark: "是否自适应宽度", type: ["Boolean"], default: false },
  { name: "transition", remark: "过渡动画", type: ["String"], default: "fade" },
  { name: "click-outside", remark: "点击外部关闭", type: ["Boolean"], default: true },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "hide-trigger", remark: "是否隐藏触发元素", type: ["Boolean"], default: false },
  { name: "update-at-scroll", remark: "滚动时更新位置", type: ["Boolean"], default: false },
  { name: "scroll-to-close", remark: "滚动时关闭", type: ["Boolean"], default: false },
  { name: "auto-fix-position", remark: "自动修正位置", type: ["Boolean"], default: true },
  { name: "scroll-to-close-time", remark: "滚动关闭延迟", type: ["Number"], default: 400 },
  { name: "throttle-time", remark: "节流时间", type: ["Number"], default: 20 },
  { name: "open-delay", remark: "延迟打开(ms)", type: ["Number"], default: 0 },
  { name: "close-delay", remark: "延迟关闭(ms)", type: ["Number"], default: 100 },
  { name: "boundary-padding", remark: "边界留白", type: ["Number"], default: 8 },
  { name: "show-arrow", remark: "是否显示箭头", type: ["Boolean"], default: false },
  { name: "show-shadow", remark: "是否显示阴影", type: ["Boolean"], default: true },
  { name: "get-popup-container", remark: "自定义挂载容器", type: ["Function"] },
];

export const triggerEvents: EventItem[] = [
  { name: "update:modelValue", remark: "显示状态变化", params: "visible: boolean" },
  { name: "popupVisible", remark: "弹出层显示变化", params: "visible: boolean" },
  { name: "positionChange", remark: "位置变化", params: "{ position, top, left, width }" },
];

export const triggerSlots: SlotItem[] = [
  { name: "default", remark: "触发内容" },
  { name: "content", remark: "弹出内容" },
];
