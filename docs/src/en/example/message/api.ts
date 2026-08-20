import { MethodItem, PropItem } from "../../../.vitepress/components/api-block/src/types";

export const messageOptions: PropItem[] = [
  { name: "id", remark: "Unique message id; same id updates instead of creating a new one", type: ["String"] },
  {
    name: "type",
    remark: "Message type",
    type: ["String"],
    optional: ["text", "success", "warning", "error", "loading"],
    default: "text",
  },
  { name: "content", remark: "Message content", type: ["String"] },
  { name: "duration", remark: "Auto-close delay in ms; 0 means do not auto-close", type: ["Number"], default: 3000 },
  { name: "closeable", remark: "Whether to show close Button", type: ["Boolean"], default: false },
  { name: "plain", remark: "Whether to use plain mode", type: ["Boolean"], default: false },
  {
    name: "position",
    remark: "Message position",
    type: ["String"],
    optional: ["top", "bottom"],
    default: "top",
  },
  { name: "onClose", remark: "Callback when the message closes", type: ["Function"] },
];

export const messageMethods: MethodItem[] = [
  { name: "Message.text", remark: "Show a text message", params: "config: MessageInstance" },
  { name: "Message.success", remark: "Show a success message", params: "config: MessageInstance" },
  { name: "Message.warning", remark: "Show a warning message", params: "config: MessageInstance" },
  { name: "Message.error", remark: "Show an error message", params: "config: MessageInstance" },
  { name: "Message.loading", remark: "Show a loading message", params: "config: MessageInstance" },
  { name: "Message.removeAll", remark: "Clear all messages" },
];
