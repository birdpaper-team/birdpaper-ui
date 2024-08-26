import { ExtractPropTypes, PropType } from "vue";
import {
  ButtonNavtiveType,
  ButtonShape,
  ButtonSize,
  ButtonStatus,
  ButtonType,
} from "./types";

export const buttonProps = {
  /**
   * @type {ButtonType}
   * @description Button type.
   * @default normal
   */
  type: {
    type: String as PropType<ButtonType>,
    default: "secondary",
  },
  /**
   * @typpe {ButtonNavtiveType}
   * @description Button Native attribute.
   * @default button
   */
  attrType: {
    type: String as PropType<ButtonNavtiveType>,
    default: "button",
  },
  /**
   * @type {ButtonStatus}
   * @description Button status
   * @default gary
   */
  status: {
    type: String as PropType<ButtonStatus>,
    default: "gary",
  },
  /**
   * @type {ButtonSize}
   * @description Button size.
   * @default default
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: "default",
  },
  /**
   * @type {ButtonShape}
   * @description Button shape.
   * @default square
   */
  shape: {
    type: String as PropType<ButtonShape>,
    default: "square",
  },
  /**
   * @type boolean
   * @description Button is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Button is loading or not.
   * @default false
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Button is full width or not.
   * @default false
   */
  full: {
    type: Boolean,
    default: false,
  },
  /**
   * @type object
   * @description Button icon component.
   * @default null
   */
  icon: {
    type: Object,
    default: () => null,
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
