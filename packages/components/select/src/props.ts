import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, ModelRef, PropType, Ref } from "vue";
import { SelectValue } from "./types";

export const selectProps = {
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
   * @description Select is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Select is clearable or not.
   * @default false
   */
  clearable: {
    type: Boolean,
    default: false,
  },
};

export const optionProps = {
  /**
   * @type SelectValue
   * @description The option value.
   * @default ""
   * @requires
   */
  value: {
    type: [Number, String] as PropType<SelectValue>,
    default: "",
    require: true,
  },
  /**
   * @type string
   * @description The option label text.
   */
  label: {
    type: String,
  },
  /**
   * @type boolean
   * @description Select is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type OptionProps = ExtractPropTypes<typeof optionProps>;
