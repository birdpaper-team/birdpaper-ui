/** 消息类型 */
export type MessageType =
  | "text"
  | "success"
  | "successPlain"
  | "warning"
  | "warningPlain"
  | "error"
  | "errorPlain"
  | "loading";

export type MessageInstance = string | MessageItem;

export interface MessageItem {
  id: string;
  type?: MessageType;
  content: string;
  duration?: number;
  closeable?: boolean;
  plain: boolean;
  onClose?: Function;
}
