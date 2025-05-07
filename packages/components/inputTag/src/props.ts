import { ExtractPropTypes } from "vue";

export const inputTagProps = {
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
   * @type boolean
   * @description Input is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type number
   * @description The max tag count.
   * @default 0
   */
  maxTagCount: {
    type: Number,
    default: 0,
  },
};

export type InputTagProps = ExtractPropTypes<typeof inputTagProps>;
