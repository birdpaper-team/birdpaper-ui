import type { ExtractPropTypes, PropType } from "vue";
import { ModalType } from "./types";
import { ButtonProps } from "@birdpaper-ui/birdpaper-ui";

export const modalProps = {
  /**
   * @type boolean
   * @description Whether to use the method.
   * @default false
   */
  isMethod: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Modal type.
   * @default "info"
   */
  type: {
    type: String as PropType<ModalType>,
  },
  /**
   * @type string
   * @description Title.
   * @default ""
   */
  title: {
    type: String,
    default: "",
  },
  /**
   * @type string
   * @description Content.
   */
  content: {
    type: String,
  },
  /**
   * @type string | number
   * @description Modal width.
   * @default "50%"
   */
  width: {
    type: [String, Number] as PropType<string | number>,
    default: "50%",
  },
  /**
   * @type string
   * @description Modal body class.
   */
  bodyClass: {
    type: String,
  },
  /**
   * @type string
   * @description Modal border radius.
   * @default "8px"
   */
  borderRadius: {
    type: String,
    default: "8px",
  },
  /**
   * @type boolean
   * @description Whether to center the modal.
   * @default false
   */
  center: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to show the border.
   * @default true
   */
  showBorder: {
    type: Boolean,
    default: true,
  },
  /**
   * @type string
   * @description Modal top.
   * @default "0"
   */
  top: {
    type: String,
    default: "0",
  },
  /**
   * @type string
   * @description Modal bottom.
   * @default "0"
   */
  bottom: {
    type: String,
    default: "0",
  },
  /**
   * @type boolean
   * @description Whether to close the modal when clicking the mask.
   * @default true
   */
  maskClosable: {
    type: Boolean,
    default: true,
  },
  /**
   * @type boolean
   * @description Whether to hide the header.
   * @default false
   */
  hideHeader: {
    type: Boolean,
    default: false,
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
   * @description Whether to hide the close button.
   * @default false
   */
  hideClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to be full screen.
   * @default false
   */
  fullscreen: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Confirm button content.
   * @default "确认"
   */
  okText: {
    type: String,
    default: "确认",
  },
  /**
   * @type Object
   * @description Confirm button props.
   */
  okBtnProps: {
    type: Object as PropType<ButtonProps>,
    default: () => ({
      type: "normal",
      status: "primary",
    }),
  },
  /**
   * @type string
   * @description Cancel button content.
   * @default "取消"
   */
  cancelText: {
    type: String,
    default: "取消",
  },
  /**
   * @type Object
   * @description Cancel button props
   */
  cancelBtnProps: {
    type: Object as PropType<ButtonProps>,
    default: () => ({
      type: "secondary",
      status: "gray",
    }),
  },
  /**
   * @type boolean
   * @description Whether to hide the cancel button.
   * @default false
   */
  hideCancel: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Whether to hide the title icon.
   * @default false
   */
  hideTitleIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * @type Function
   * @description Callback function before confirming.
   */
  onBeforeOk: {
    type: Function as PropType<() => boolean | Promise<boolean>>,
  },
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>;
