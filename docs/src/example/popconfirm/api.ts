import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const popconfirmProps: PropItem[] = [
  { name: "content", remark: "确认框提示内容", type: ["String"], default: "" },
  {
    name: "type",
    remark: "确认框类型，影响图标和按钮样式",
    type: ["String"],
    optional: ["info", "success", "warning", "error"],
    default: "info",
  },
  { name: "position", remark: "气泡弹出位置", type: ["TriggerPosition"], default: "top" },
  { name: "ok-text", remark: "确认按钮文字", type: ["String"], default: "确认" },
  { name: "cancel-text", remark: "取消按钮文字", type: ["String"], default: "取消" },
  {
    name: "on-before-ok",
    remark: "确认前的异步回调，返回 true 关闭气泡，返回 false 保持打开。按钮自动进入 loading 状态",
    type: ["Function"],
  },
];

export const popconfirmEvents: EventItem[] = [
  { name: "ok", remark: "点击确认按钮后触发" },
  { name: "cancel", remark: "点击取消按钮后触发" },
];

export const popconfirmSlots: SlotItem[] = [{ name: "default", remark: "触发气泡的元素" }];
