import { ExtractPropTypes, PropType } from "vue";
import { TriggerPosition, TriggerType } from "./types";

export const triggerProps = {
  /**
   * @type TriggerType
   * @description Trigger type.
   * @default "click"
   */
  trigger: {
    type: String as PropType<TriggerType>,
    default: "click",
  },
  /**
   * @type TriggerPosition
   * @description Trigger position.
   * @default "bottom"
   */
  position: {
    type: String as PropType<TriggerPosition>,
    default: "bottom",
  },
  /**
   * @type number
   * @description Offset of the popup box.
   * @default 0
   */
  popupOffset: {
    type: Number,
    default: 0,
  },
  /**
   * @type [number, number]
   * @description Distance from the trigger.
   * @default: [0, 0]
   */
  popupTranslate: {
    type: Array as unknown as PropType<[number, number]>,
    default: [0, 0],
  },
  /**
   * @type boolean
   * @description Fill the trigger width or not.
   * @default false
   */
  autoFitWidth: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description Transition name.
   * @default "fade"
   */
  transition: {
    type: String,
    default: "fade",
  },
  /**
   * @type boolean
   * @description Click on the external element to close the trigger.
   * @default true
   */
  clickOutside: {
    type: Boolean,
    default: true,
  },
  /**
   * @type boolean
   * @description  Disabled or not.
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Hide the trigger element or not.
   * @default false
   */
  hideTrigger: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Update position when scroll or not.
   * @default false
   */
  updateAtScroll: {
    type: Boolean,
    default: false,
  },
  /**
   * @type boolean
   * @description Close when scroll or not.
   * @default false
   */
  scrollToClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @type number
   * @description Scroll close time.
   * @default 400
   */
  scrollToCloseTime: {
    type: Number,
    default: 400,
  },
};

export type TriggerProps = ExtractPropTypes<typeof triggerProps>;
