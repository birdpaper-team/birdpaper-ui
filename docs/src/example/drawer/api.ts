import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const drawerProps: PropItem[] = [
  { name: "v-model", remark: "抽屉是否可见", type: ["Boolean"] },
  { name: "title", remark: "抽屉标题", type: ["String"], default: "标题" },
  { name: "width", remark: "抽屉宽度（left/right 方向生效）", type: ["String"], default: "360px" },
  { name: "height", remark: "抽屉高度（up/down 方向生效）", type: ["String"], default: "360px" },
  {
    name: "placement",
    remark: "抽屉弹出方向",
    type: ["String"],
    optional: ["left", "right", "up", "down"],
    default: "right",
  },
  { name: "hide-footer", remark: "是否隐藏底部区域", type: ["Boolean"], default: false },
  { name: "hide-close", remark: "是否隐藏关闭按钮", type: ["Boolean"], default: false },
  { name: "border", remark: "是否显示边框", type: ["Boolean"], default: false },
  { name: "mask-closable", remark: "点击遮罩是否关闭抽屉", type: ["Boolean"], default: true },
  { name: "ok-text", remark: "确认按钮文字", type: ["String"], default: "确认" },
  { name: "cancel-text", remark: "取消按钮文字", type: ["String"], default: "取消" },
  {
    name: "on-before-ok",
    remark: "确认前的异步回调，返回 true 关闭抽屉，返回 false 保持打开。按钮自动进入 loading 状态",
    type: ["Function"],
  },
];

export const drawerEvents: EventItem[] = [
  { name: "cancel", remark: "点击取消或关闭按钮时触发" },
  { name: "confirm", remark: "点击确认按钮后触发" },
];

export const drawerSlots: SlotItem[] = [
  { name: "default", remark: "抽屉内容区域" },
  { name: "header", remark: "自定义头部区域" },
  { name: "footer", remark: "自定义底部按钮区域" },
];
