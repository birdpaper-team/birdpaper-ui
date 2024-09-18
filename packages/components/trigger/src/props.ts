import { ExtractPropTypes, PropType } from "vue";
import { TriggerPosition } from "./types";

export const triggerProps = {
  trigger: { type: String, default: "click" },
  position: { type: String as PropType<TriggerPosition>, default: "bottom" },
  popupOffset: { type: Number, default: 10 },
  popupTranslate: { type: Array as unknown as PropType<[number, number]>, default: [0, 0] },
  autoFitWidth: { type: Boolean, default: false },
  transition: { type: String, default: "fade" },
  clickOutside: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  hideTrigger: { type: Boolean, default: false },
  updateAtScroll: { type: Boolean, default: false },
  scrollToClose: { type: Boolean, default: false },
  scrollToCloseTime: { type: Number, default: 400 },
};

export type TriggerProps = ExtractPropTypes<typeof triggerProps>;
