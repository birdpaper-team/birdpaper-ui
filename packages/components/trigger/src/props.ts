import { ExtractPropTypes, PropType } from "vue";
import { TriggerPosition, TriggerType } from "./types";

export const triggerProps = {
  /**
   * @type boolean
   * @description Visible model.
   * @default false
   */
  modelValue: { type: Boolean, default: false },
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
   * @type boolean
   * @description Auto fix the position with window size.
   * @default true
   */
  autoFixPosition: {
    type: Boolean,
    default: true,
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
  /**
   * @type number
   * @description Throttle time for resize/scroll handlers.
   * @default 20
   */
  throttleTime: {
    type: Number,
    default: 20,
  },
  /**
   * @type number
   * @description Hover open delay time.
   * @default 0
   */
  openDelay: {
    type: Number,
    default: 0,
  },
  /**
   * @type number
   * @description Hover close delay time.
   * @default 100
   */
  closeDelay: {
    type: Number,
    default: 100,
  },
  /**
   * @type number
   * @description Popup position boundary padding.
   * @default 8
   */
  boundaryPadding: {
    type: Number,
    default: 8,
  },
  /**
   * @type boolean
   * @description Show popup arrow.
   * @default false
   */
  showArrow: {
    type: Boolean,
    default: false,
  },
  /**
   * @type Function
   * @description Get popup container element.
   * @default () => document.body
   */
  getPopupContainer: {
    type: Function as PropType<() => HTMLElement>,
    default: () => document.body,
  },
};

export type TriggerProps = ExtractPropTypes<typeof triggerProps>;
