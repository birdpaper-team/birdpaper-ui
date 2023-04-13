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
  icon?: string;
  content: string;
  clearable?: boolean;
}
