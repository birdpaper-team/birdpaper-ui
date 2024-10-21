import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const inputNumberProps = {
  /**
   * @type string
   * @description The input name.
   * @default ""
   */
  name: {
    type: String,
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
   * @type boolean
   * @description Hide button or not.
   * @default false
   */
  hideButton: {
    type: Boolean,
    default: false,
  },
  /**
   * @type number
   * @description Number of decimal places to retain.
   */
  precision: {
    type: Number,
  },
  /**
   * @type number
   * @description The step value.
   * @default 1
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * @type number
   * @description The min value.
   * @default -Infinity
   */
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER,
  },
  /**
   * @type number
   * @description The max value.
   * @default Infinity
   */
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
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
   * @description Replace NaN with zero.
   * @default false
   */
  nanToZero: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description The event that triggers the input change.
   * @default "input"
   */
  modelEvent: {
    type: String as PropType<"input" | "change">,
    default: "input",
  },
} as const;

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;
