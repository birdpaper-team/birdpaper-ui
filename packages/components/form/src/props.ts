import { Rules } from "async-validator";
import { ExtractPropTypes, PropType } from "vue";

export const formProps = {
  /**
   * @type Object
   * @description Form data object.
   */
  model: {
    type: Object,
    required: true,
  },
  /**
   * @type Object
   * @description Form validation rules.
   */
  rules: {
    type: [Array, Object] as PropType<Rules>,
    default: undefined,
  },
  /**
   * @type [String, Number]
   * @description Label width.
   * @default "80px"
   */
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: "80px",
  },
  /**
   * @type String
   * @description Label position.
   * @default "right"
   */
  labelPosition: {
    type: String as PropType<"right" | "left" | "top">,
    default: "right",
  },
  /**
   * @type String
   * @description Form layout.
   * @default "vertical"
   */
  layout: {
    type: String as PropType<"vertical" | "inline" | "horizontal">,
    default: "vertical",
  },
} as const;

export const formItemProps = {
  /**
   * @type String
   * @description Label text.
   * @default ""
   */
  label: {
    type: String,
    default: "",
  },
  /**
   * @type String
   * @description Form item field.
   * @default ""
   */
  field: {
    type: String,
    default: "",
  },
  /**
   * @type Boolean
   * @description Whether the form item is required.
   * @default false
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * @type [String, Number]
   * @description Label width.
   */
  width: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * @type Boolean
   * @description Whether to show the colon after the label.
   * @default false
   */
  showColon: {
    type: Boolean,
    default: false,
  },
  /**
   * @type Object
   * @description Form item validation rules.
   */
  rules: {
    type: [Array, Object] as PropType<Rules>,
    default: undefined,
  },
  /**
   * @type Boolean
   * @description Whether to validate automatically when blur.
   * @default false
   */
  autoValidate: {
    type: Boolean,
    default: false,
  },
} as const;

export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
