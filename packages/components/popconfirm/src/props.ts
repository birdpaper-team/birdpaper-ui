import type { ExtractPropTypes, PropType } from "vue";
import { PopconfirmType } from "./types";
import { TriggerPosition } from "@birdpaper-ui/components/trigger/src/types";

export const popconfirmProps = {
  /**
   * @type {string}
   * @description The content of the popconfirm.
   * @default ""
   */
  content: {
    type: String,
    default: "",
  },
  /**
   * @type {string}
   * @description The type of the popconfirm.
   * @default "info"
   */
  type: {
    type: String as PropType<PopconfirmType>,
    default: "info",
  },
  /**
   * @type {string}
   * @description The position of the popconfirm.
   * @default "top"
   */
  position: {
    type: String as PropType<TriggerPosition>,
    default: "top",
  },
  /**
   * @type {string}
   * @description The text of the confirm button. Falls back to the ConfigProvider locale.
   * @default ''
   */
  okText: {
    type: String,
    default: "",
  },
  /**
   * @type {string}
   * @description The text of the cancel button. Falls back to the ConfigProvider locale.
   * @default ''
   */
  cancelText: {
    type: String,
    default: "",
  },
  /**
   * @type {Function}
   * @description The callback function before the confirm button is clicked.
   */
  onBeforeOk: {
    type: Function as PropType<() => boolean | Promise<boolean>>,
  },
} as const;

export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>;
