/** 消息类型 */
export enum MessageType {
  Text = "text",
  Success = "success",
  Warning = "warning",
  Error = "error",
  Loading = "loading",
}

/** 消息配置 */
export interface MessageConfig {
  id?: string;
  type?: MessageType;
  content: string;
  duration?: number;
  closeable?: boolean;
}

export interface MessageItem {
  id: number | string;
  type?: MessageType;
  content: string;
  duration?: number;
  closeable?: boolean;
}
