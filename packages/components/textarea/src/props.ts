import { TextareaSize, WordCountMode, CustomWordCountFunction } from "./types";
import { ExtractPropTypes, PropType } from "vue";

export const textareaProps = {
  /**
   * @type string
   * @description The input id.
   */
  id: {
    type: String,
  },
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
   * @type TextareaSize
   * @description Input sizes.
   * @default default
   */
  size: {
    type: String as PropType<TextareaSize>,
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
  /**
   * @type WordCountMode
   * @description Word count mode.
   * @default default
   */
  wordCountMode: {
    type: String as PropType<WordCountMode>,
    default: "default",
  },
  /**
   * @type CustomWordCountFunction
   * @description Custom word count function.
   * @default null
   */
  customWordCount: {
    type: Function as PropType<CustomWordCountFunction>,
    default: null,
  },
};

export type TextareaProps = ExtractPropTypes<typeof textareaProps>;
