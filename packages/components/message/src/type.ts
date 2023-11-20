/** 消息类型 */
export type MessageType = "text" | "success" | "warning" | "error" | "loading";

export type MessageInstance = string | MessageItem;

export interface MessageItem {
  id: string;
  type?: MessageType;
  content: string;
  duration?: number;
  closeable?: boolean;
}
