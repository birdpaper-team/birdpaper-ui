import { ExtractPropTypes, PropType } from "vue";

export const drawerProps = {
  /**
   * @type string
   * @description Drawer title.
   * @default "标题"
   */
  title: {
    type: String,
    default: "标题",
  },
  /**
   * @type string
   * @description Drawer width.
   * @default "360px"
   */
  width: {
    type: String,
    default: "360px",
  },
  /**
   * @type string
   * @description Drawer height.
   * @default "360px"
   */
  height: {
    type: String,
    default: "360px",
  },
  /**
   * @type string
   * @description Drawer placement.
   * @default "right"
   */
  placement: {
    type: String as PropType<"left" | "right" | "up" | "down">,
    default: "right",
  },
  /**
   * @type boolean
   * @description Whether to hide the footer.
   * @default false
   */
  hideFooter: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to hide the close icon.
   * @default false
   */
  hideClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to show the border.
   * @default false
   */
  border: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to close when clicking the mask.
   * @default true
   */
  maskClosable: {
    type: Boolean,
    default: true,
  },
  /**
   * @type string
   * @description The text of the confirm button.
   * @default "确认"
   */
  okText: {
    type: String,
    default: "确认",
  },
  /**
   * @type string
   * @description The text of the cancel button.
   * @default "取消"
   */
  cancelText: {
    type: String,
    default: "取消",
  },
  /**
   * @type function
   * @description The callback function before the confirm button is clicked.
   */
  onBeforeOk: {
    type: Function as PropType<() => boolean | Promise<boolean>>,
  },
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
