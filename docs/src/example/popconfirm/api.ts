import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const popconfirmProps: PropItem[] = [
  { name: "content", remark: "提示内容", type: ["String"], default: "" },
  {
    name: "type",
    remark: "类型",
    type: ["String"],
    optional: ["info", "success", "warning", "error"],
    default: "info",
  },
  { name: "position", remark: "弹出位置", type: ["TriggerPosition"], default: "top" },
  { name: "ok-text", remark: "确认按钮文字", type: ["String"], default: "确认" },
  { name: "cancel-text", remark: "取消按钮文字", type: ["String"], default: "取消" },
  { name: "on-before-ok", remark: "确认前回调", type: ["Function"] },
];

export const popconfirmEvents: EventItem[] = [
  { name: "cancle", remark: "取消触发" },
  { name: "ok", remark: "确认触发" },
];

export const popconfirmSlots: SlotItem[] = [{ name: "default", remark: "触发元素" }];
