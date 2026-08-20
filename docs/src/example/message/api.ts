import { MethodItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const messageOptions: PropItem[] = [
  { name: "id", remark: "消息唯一标识，相同 id 会更新而非新建",
    remarkEn: "Unique message id; same id updates instead of creating a new one", type: ["String"] },
  {
    name: "type",
    remark: "消息类型",
    remarkEn: "Message type",
    type: ["String"],
    optional: ["text", "success", "warning", "error", "loading"],
    default: "text",
  },
  { name: "content", remark: "消息内容",
    remarkEn: "Message content", type: ["String"] },
  { name: "duration", remark: "自动关闭的延迟时间（毫秒），0 表示不自动关闭",
    remarkEn: "Auto-close delay in ms; 0 means do not auto-close", type: ["Number"], default: 3000 },
  { name: "closeable", remark: "是否显示关闭按钮",
    remarkEn: "Whether to show close Button", type: ["Boolean"], default: false },
  { name: "plain", remark: "是否使用简洁模式",
    remarkEn: "Whether to use plain mode", type: ["Boolean"], default: false },
  {
    name: "position",
    remark: "消息弹出位置",
    remarkEn: "Message position",
    type: ["String"],
    optional: ["top", "bottom"],
    default: "top",
  },
  { name: "onClose", remark: "消息关闭时的回调函数",
    remarkEn: "Callback when the message closes", type: ["Function"] },
];

export const messageMethods: MethodItem[] = [
  { name: "Message.text", remark: "弹出文本消息",
    remarkEn: "Show a text message", params: "config: MessageInstance" },
  { name: "Message.success", remark: "弹出成功消息",
    remarkEn: "Show a success message", params: "config: MessageInstance" },
  { name: "Message.warning", remark: "弹出警告消息",
    remarkEn: "Show a warning message", params: "config: MessageInstance" },
  { name: "Message.error", remark: "弹出错误消息",
    remarkEn: "Show an error message", params: "config: MessageInstance" },
  { name: "Message.loading", remark: "弹出加载消息",
    remarkEn: "Show a loading message", params: "config: MessageInstance" },
  { name: "Message.removeAll", remark: "清除所有消息",
    remarkEn: "Clear all messages" },
];
