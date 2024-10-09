import { ExtractPropTypes, PropType } from "vue";
import { RadioValue } from "./types";

export const radioProps = {
  /**
   * @type string | number | boolean
   * @description Value of the radio.
   * @default false
   */
  value: {
    type: [String, Number, Boolean] as PropType<RadioValue>,
    default: false,
  },
  /**
   * @type boolean
   * @description Disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
