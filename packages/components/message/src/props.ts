import { ExtractPropTypes, PropType } from "vue";
import { MessageType } from "./type";

export const messageProps = {
  /** 消息ID Message id */
  id: { type: String },
  /** 消息提示类型 Message prompt type */
  type: { type: String as PropType<MessageType>, default: "text" },
  /** 消息提示内容 Message prompt content */
  content: { type: String, default: "" },
  /** 延迟关闭时间 Delayed shutdown time */
  duration: { type: Number, default: 3000 },
  /** 是否允许手动关闭 Closeable or not */
  closeable: { type: Boolean, default: false },
  /** 是否开启无背景展示 */
  plain: { type: Boolean, default: false },
  /** 关闭后的回调函数 */
  onClose: { type: Function },
};

export type MessageProps = ExtractPropTypes<typeof messageProps>;
