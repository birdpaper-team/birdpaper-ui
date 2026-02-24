import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const drawerProps: PropItem[] = [
  { name: "v-model", remark: "是否显示", type: ["Boolean"] },
  { name: "title", remark: "标题", type: ["String"], default: "标题" },
  { name: "width", remark: "宽度", type: ["String"], default: "360px" },
  { name: "height", remark: "高度", type: ["String"], default: "360px" },
  {
    name: "placement",
    remark: "弹出方向",
    type: ["String"],
    optional: ["left", "right", "up", "down"],
    default: "right",
  },
  { name: "hide-footer", remark: "是否隐藏底部", type: ["Boolean"], default: false },
  { name: "hide-close", remark: "是否隐藏关闭按钮", type: ["Boolean"], default: false },
  { name: "border", remark: "是否显示边框", type: ["Boolean"], default: false },
  { name: "mask-closable", remark: "点击遮罩是否关闭", type: ["Boolean"], default: true },
  { name: "ok-text", remark: "确认按钮文字", type: ["String"], default: "确认" },
  { name: "cancle-text", remark: "取消按钮文字", type: ["String"], default: "取消" },
  { name: "on-before-ok", remark: "确认前回调", type: ["Function"] },
];

export const drawerEvents: EventItem[] = [
  { name: "cancel", remark: "取消触发" },
  { name: "confirm", remark: "确认触发" },
];

export const drawerSlots: SlotItem[] = [
  { name: "default", remark: "内容" },
  { name: "header", remark: "头部" },
  { name: "footer", remark: "底部" },
];
