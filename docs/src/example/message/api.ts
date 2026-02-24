import { MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const messageOptions: PropItem[] = [
  { name: "id", remark: "消息 ID", type: ["String"] },
  {
    name: "type",
    remark: "消息类型",
    type: ["String"],
    optional: ["text", "success", "warning", "error", "loading"],
    default: "text",
  },
  { name: "content", remark: "内容", type: ["String"] },
  { name: "duration", remark: "持续时间(ms)", type: ["Number"], default: 3000 },
  { name: "closeable", remark: "是否可关闭", type: ["Boolean"], default: false },
  { name: "plain", remark: "是否简洁模式", type: ["Boolean"], default: false },
  {
    name: "position",
    remark: "显示位置",
    type: ["String"],
    optional: ["top", "bottom"],
    default: "top",
  },
  { name: "onClose",
    remark: "关闭回调",
    type: ["Function"] },
];

export const messageMethods: MethodItem[] = [
  { name: "Message.text", remark: "文本消息", params: "config: MessageInstance" },
  { name: "Message.success", remark: "成功消息", params: "config: MessageInstance" },
  { name: "Message.warning", remark: "警告消息", params: "config: MessageInstance" },
  { name: "Message.error", remark: "错误消息", params: "config: MessageInstance" },
  { name: "Message.loading", remark: "加载消息", params: "config: MessageInstance" },
  { name: "Message.removeAll", remark: "清除所有消息" },
];
