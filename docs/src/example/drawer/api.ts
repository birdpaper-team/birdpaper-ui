import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const drawerProps: PropItem[] = [
  { name: "v-model", remark: "抽屉是否可见",
    remarkEn: "Whether the drawer is visible", type: ["Boolean"] },
  { name: "title", remark: "抽屉标题",
    remarkEn: "Drawer title", type: ["String"], default: "标题" },
  { name: "width", remark: "抽屉宽度（left/right 方向生效）",
    remarkEn: "Drawer width (for left/right)", type: ["String"], default: "360px" },
  { name: "height", remark: "抽屉高度（up/down 方向生效）",
    remarkEn: "Drawer height (for up/down)", type: ["String"], default: "360px" },
  {
    name: "placement",
    remark: "抽屉弹出方向",
    remarkEn: "Drawer placement",
    type: ["String"],
    optional: ["left", "right", "up", "down"],
    default: "right",
  },
  { name: "hide-footer", remark: "是否隐藏底部区域",
    remarkEn: "Whether to hide the footer", type: ["Boolean"], default: false },
  { name: "hide-close", remark: "是否隐藏关闭按钮",
    remarkEn: "Whether to hide the close button", type: ["Boolean"], default: false },
  { name: "border", remark: "是否显示边框",
    remarkEn: "Whether bordered", type: ["Boolean"], default: false },
  { name: "mask-closable", remark: "点击遮罩是否关闭抽屉",
    remarkEn: "Whether clicking the mask closes the drawer", type: ["Boolean"], default: true },
  { name: "ok-text", remark: "确认按钮文字",
    remarkEn: "OK button text", type: ["String"], default: "确认" },
  { name: "cancel-text", remark: "取消按钮文字",
    remarkEn: "Cancel button text", type: ["String"], default: "取消" },
  {
    name: "on-before-ok",
    remark: "确认前的异步回调，返回 true 关闭抽屉，返回 false 保持打开。按钮自动进入 loading 状态",
    remarkEn: "Async callback before confirm; return true to close, false to keep open. Button shows loading automatically",
    type: ["Function"],
  },
];

export const drawerEvents: EventItem[] = [
  { name: "cancel", remark: "点击取消或关闭按钮时触发",
    remarkEn: "Triggered on cancel or close" },
  { name: "confirm", remark: "点击确认按钮后触发",
    remarkEn: "Triggered after confirm" },
];

export const drawerSlots: SlotItem[] = [
  { name: "default", remark: "抽屉内容区域",
    remarkEn: "Drawer body content" },
  { name: "header", remark: "自定义头部区域",
    remarkEn: "Custom header" },
  { name: "footer", remark: "自定义底部按钮区域",
    remarkEn: "Custom footer actions" },
];
