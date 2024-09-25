import { ExtractPropTypes, PropType } from "vue";
import { MessageType } from "./type";

export const messageProps = {
  /**
   * @type string
   * @description Message ID.
   */
  id: { type: String },
  /**
   * @type MessageType
   * @description Message type.
   * @default "text"
   */
  type: { type: String as PropType<MessageType>, default: "text" },
  /**
   * @type string
   * @description Message content.
   * @default ""
   */
  content: { type: String, default: "" },
  /**
   * @type number
   * @description Delayed shutdown time.
   * @default 3000
   */
  duration: { type: Number, default: 3000 },
  /**
   * @type boolean
   * @description Closeable or not.
   * @default false
   */
  closeable: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Plain mode.
   * @default false
   */
  plain: { type: Boolean, default: false },
  /**
   * @type Function
   * @description The close callback function.
   */
  onClose: { type: Function },
};

export type MessageProps = ExtractPropTypes<typeof messageProps>;
