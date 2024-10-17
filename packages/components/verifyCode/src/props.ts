import { InputSize, InputType } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const verifyCodeProps = {
  /**
   * @type InputSize
   * @description VerifyCode sizes.
   * @default default
   */
  size: {
    type: String as PropType<InputSize>,
    default: "default",
  },
  /**
   * @type InputType
   * @description VerifyCode type.
   * @default text
   */
  type: {
    type: String as PropType<InputType>,
    default: "text",
  },
  /**
   * @type number
   * @description VerifyCode length
   * @default 6
   */
  length: {
    type: Number,
    default: 6,
  },
  /**
   * @type boolean
   * @description VerifyCode is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description VerifyCode is readonly or not.
   * @default false
   */
  readonly: {
    type: Boolean,
    default: false,
  },
} as const;

export type VerifyCodeProps = ExtractPropTypes<typeof verifyCodeProps>;
