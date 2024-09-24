/** 消息提示位置 */
export type MessagePosition = "top" | "bottom";

/** 消息类型 */
export type MessageType = "text" | "success" | "warning" | "error" | "loading";

/** 传入的消息类型 */
export type MessageInstance = string | MessageItem;

export interface MessageItem {
  id: string;
  type?: MessageType;
  content: string;
  duration?: number;
  closeable?: boolean;
  plain: boolean;
  position: MessagePosition;
  onClose?: Function;
}
