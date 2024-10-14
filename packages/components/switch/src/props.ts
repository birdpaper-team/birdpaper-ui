import { ExtractPropTypes, PropType } from "vue";
import { SwitchSize, SwitchValue } from "./types";

export const switchProps = {
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
   * @type SwitchSize
   * @description Size of the switch.
   * @default small
   */
  size: {
    type: String as PropType<SwitchSize>,
    default: "small",
  },
  /**
   * @type SwitchValue
   * @description The check value.
   * @default true
   */
  checkValue: {
    type: [Boolean, Number, String] as PropType<SwitchValue>,
    default: true,
  },
  /**
   * @type SwitchValue
   * @description The uncheck value.
   * @default false
   */
  uncheckValue: {
    type: [Boolean, Number, String] as PropType<SwitchValue>,
    default: false,
  },
  /**
   * @type String
   * @description Text content when opened.
   * @default ""
   */
  checkText: {
    type: String,
    default: "",
  },
  /**
   * @type String
   * @description Text content when closed.
   * @default ""
   */
  uncheckText: {
    type: String,
    default: "",
  },
  /**
   * @type function
   * @description Callback function before the switch closed.
   * @default () => true
   */
  onBeforeOk: {
    type: Function,
    default: () => true,
  },
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
