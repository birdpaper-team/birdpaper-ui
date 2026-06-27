import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const triggerProps: PropItem[] = [
  { name: "v-model", remark: "控制弹出层是否可见", type: ["Boolean"], default: false },
  {
    name: "trigger",
    remark: "触发方式",
    type: ["TriggerType"],
    optional: ["click", "hover"],
    default: "click",
  },
  { name: "position", remark: "弹出位置，支持 12 种方向", type: ["TriggerPosition"], default: "bottom" },
  { name: "popup-offset", remark: "弹出层与触发元素的偏移距离", type: ["Number"], default: 0 },
  { name: "popup-translate", remark: "弹出层平移量 [x, y]", type: ["Array"], default: "[0, 0]" },
  { name: "auto-fit-width", remark: "弹出层是否自适应触发元素宽度", type: ["Boolean"], default: false },
  { name: "transition", remark: "弹出层过渡动画名称", type: ["String"], default: "fade" },
  { name: "click-outside", remark: "点击弹出层外部是否关闭", type: ["Boolean"], default: true },
  { name: "disabled", remark: "是否禁用触发", type: ["Boolean"], default: false },
  { name: "hide-trigger", remark: "是否隐藏触发元素", type: ["Boolean"], default: false },
  { name: "update-at-scroll", remark: "滚动时是否更新弹出层位置", type: ["Boolean"], default: false },
  { name: "scroll-to-close", remark: "滚动时是否关闭弹出层", type: ["Boolean"], default: false },
  { name: "auto-fix-position", remark: "是否自动修正弹出位置以适配窗口", type: ["Boolean"], default: true },
  { name: "scroll-to-close-time", remark: "滚动关闭的延迟时间（毫秒）", type: ["Number"], default: 400 },
  { name: "throttle-time", remark: "resize/scroll 事件节流时间（毫秒）", type: ["Number"], default: 20 },
  { name: "open-delay", remark: "悬停触发的延迟打开时间（毫秒）", type: ["Number"], default: 0 },
  { name: "close-delay", remark: "悬停触发的延迟关闭时间（毫秒）", type: ["Number"], default: 100 },
  { name: "boundary-padding", remark: "弹出层与窗口边界的最小留白", type: ["Number"], default: 8 },
  { name: "show-arrow", remark: "是否显示指向触发元素的箭头", type: ["Boolean"], default: false },
  { name: "get-popup-container", remark: "自定义弹出层挂载容器", type: ["Function"] },
];

export const triggerEvents: EventItem[] = [
  { name: "update:modelValue", remark: "弹出层可见状态变化时触发", params: "visible: boolean" },
  { name: "popupVisible", remark: "弹出层显示/隐藏时触发", params: "visible: boolean" },
  { name: "positionChange", remark: "弹出层位置变化时触发", params: "{ position, top, left, width }" },
];

export const triggerSlots: SlotItem[] = [
  { name: "default", remark: "触发弹出层的元素" },
  { name: "content", remark: "弹出层内容" },
];
