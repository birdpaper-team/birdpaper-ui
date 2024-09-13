import { ExtractPropTypes, PropType } from "vue";
import { InputSize, InputType } from "./types";

export const inputProps = {
  /**
   * @type string
   * @description The input name.
   * @default ""
   */
  name: {
    type: String,
  },
  /**
   * @type InputType
   * @description Input type.
   * @default text
   */
  type: {
    type: String as PropType<InputType>,
    default: "text",
  },
  /**
   * @type string
   * @description Placeholder text content.
   * @default ""
   */
  placeholder: {
    type: String,
    default: "",
  },
  /**
   * @type InputSize
   * @description Input sizes.
   * @default default
   */
  size: {
    type: String as PropType<InputSize>,
    default: "default",
  },
  /**
   * @type number
   * @description Maximum input length, null indicates no limit.
   * @default 0
   */
  maxlength: {
    type: Number,
    default: null,
  },
  /**
   * @type boolean
   * @description Show word limit or not.
   * @default false
   */
  showLimit: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Show password trigger icon or not.(when the type is password)
   * @default true
   */
  showPassword: {
    type: Boolean,
    default: true,
  },
  /**
   * @type boolean
   * @description Input is readonly or not.
   * @default false
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Input is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Input is clearable or not.
   * @default false
   */
  clearable: {
    type: Boolean,
    default: false,
  },
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;
