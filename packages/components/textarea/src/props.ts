import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const textareaProps = {
  /**
   * @type string
   * @description The textarea name.
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
   * @description Textarea is readonly or not.
   * @default false
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Textarea is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Textarea is clearable or not.
   * @default false
   */
  clearable: {
    type: Boolean,
    default: false,
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
   * @type number
   * @description Textarea row.
   * @default 3
   */
  rows: {
    type: Number,
    default: 3,
  },
};

export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
