import { ExtractPropTypes, PropType } from "vue";
import { CheckboxValue } from "./types";

export const checkboxProps = {
  /**
   * @type boolean
   * @description Disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type CheckboxValue
   * @description Checkbox value.
   * @default false
   */
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValue>,
    default: false,
  },
  /**
   * @type boolean
   * @description Indeterminate or not.
   * @dafault false
   */
  indeterminate: {
    type: Boolean,
    default: false,
  },
  /**
   * @type number
   * @description Max number of checkbox.
   * @default 0
   */
  max: {
    type: Number,
    default: 0,
  },
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
