import { TriggerType } from "@birdpaper-ui/components/trigger/src/types";
import { ExtractPropTypes, PropType } from "vue";

export const tooltipProps = {
  /**
   * @type string
   * @description The tip content.
   * @default ""
   */
  content: { type: String, default: "" },
  /**
   * @type TriggerType
   * @description The trigger type.
   * @default "hover"
   */
  trigger: { type: String as PropType<TriggerType>, default: "hover" },
  /**
   * @type string
   * @description The theme of the tooltip.
   * @default "dark"
   */
  theme: { type: String, default: "dark" },
  /**
   * @type "top" | "bottom"
   * @description The position of the tooltip.
   * @default "top"
   */
  position: { type: String as PropType<"top" | "bottom">, default: "top" },
};

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
