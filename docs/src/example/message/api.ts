import { MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const messageOptions: PropItem[] = [
  { name: "id", remark: "消息唯一标识，相同 id 会更新而非新建", type: ["String"] },
  {
    name: "type",
    remark: "消息类型",
    type: ["String"],
    optional: ["text", "success", "warning", "error", "loading"],
    default: "text",
  },
  { name: "content", remark: "消息内容", type: ["String"] },
  { name: "duration", remark: "自动关闭的延迟时间（毫秒），0 表示不自动关闭", type: ["Number"], default: 3000 },
  { name: "closeable", remark: "是否显示关闭按钮", type: ["Boolean"], default: false },
  { name: "plain", remark: "是否使用简洁模式", type: ["Boolean"], default: false },
  {
    name: "position",
    remark: "消息弹出位置",
    type: ["String"],
    optional: ["top", "bottom"],
    default: "top",
  },
  { name: "onClose", remark: "消息关闭时的回调函数", type: ["Function"] },
];

export const messageMethods: MethodItem[] = [
  { name: "Message.text", remark: "弹出文本消息", params: "config: MessageInstance" },
  { name: "Message.success", remark: "弹出成功消息", params: "config: MessageInstance" },
  { name: "Message.warning", remark: "弹出警告消息", params: "config: MessageInstance" },
  { name: "Message.error", remark: "弹出错误消息", params: "config: MessageInstance" },
  { name: "Message.loading", remark: "弹出加载消息", params: "config: MessageInstance" },
  { name: "Message.removeAll", remark: "清除所有消息" },
];
