import { ExtractPropTypes, PropType } from "vue";
import { ButtonIcon, ButtonLoadingIcon, ButtonNavtiveType, ButtonShape, ButtonSize, ButtonStatus, ButtonType } from "./types";

export const buttonProps = {
  /**
   * @type ButtonType
   * @description Button type.
   * @default normal
   */
  type: {
    type: String as PropType<ButtonType>,
    default: ButtonType.NORMAL,
    validator: (value: ButtonType): boolean => Object.values(ButtonType).includes(value),
  },
  /**
   * @type ButtonNavtiveType
   * @description Button Native attribute.
   * @default button
   */
  attrType: {
    type: String as PropType<ButtonNavtiveType>,
    default: ButtonNavtiveType.BUTTON,
    validator: (value: ButtonNavtiveType): boolean => Object.values(ButtonNavtiveType).includes(value),
  },
  /**
   * @type ButtonStatus
   * @description Button status
   * @default gray
   */
  status: {
    type: String as PropType<ButtonStatus>,
    default: ButtonStatus.PRIMARY,
    validator: (value: ButtonStatus): boolean => Object.values(ButtonStatus).includes(value),
  },
  /**
   * @type ButtonSize
   * @description Button size.
   * @default default
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.DEFAULT,
    validator: (value: ButtonSize): boolean => Object.values(ButtonSize).includes(value),
  },
  /**
   * @type ButtonShape
   * @description Button shape.
   * @default square
   */
  shape: {
    type: String as PropType<ButtonShape>,
    default: ButtonShape.SQUARE,
    validator: (value: ButtonShape): boolean => Object.values(ButtonShape).includes(value),
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
   * @type ButtonLoadingIcon
   * @description The default icon number which 1-5 or icon component.
   * @default 1
   */
  loadingIcon: {
    type: [Number, Object] as PropType<ButtonLoadingIcon>,
    validator: (val: unknown): boolean => {
      if (typeof val === "number") {
        return [1, 2, 3, 4, 5].includes(val);
      }
      return typeof val === "object" && val !== null;
    },
    default: 1,
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
   * @type ButtonIcon
   * @description Button icon component.
   * @default null
   */
  icon: {
    type: Object as PropType<ButtonIcon | null>,
    default: null,
  },
  /**
   * @type [Number, String]
   * @description Button icon gap.
   * @default undefined
   */
  iconGap: {
    type: [Number, String] as PropType<number | string>,
    default: undefined,
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
