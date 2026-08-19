import { InputSize } from "@birdpaper-ui/components/input/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const timePickerProps = {
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
   * @description Input is disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Clearable or not.
   * @default false
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Value format.
   * @default "HH:mm:ss"
   */
  valueFormat: {
    type: String,
    default: "HH:mm:ss",
  },
  /**
   * @type boolean
   * @description Hide trigger or not.
   * @default false
   */
  hideTrigger: {
    type: Boolean,
    default: false,
  },
} as const;

export const timeTableProps = {
  /**
   * @type boolean
   * @description Only show selector or not.
   * @default false
   */
  onlySelector: {
    type: Boolean,
    default: false,
  },
} as const;

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
export type TimeTableProps = ExtractPropTypes<typeof timeTableProps>;
