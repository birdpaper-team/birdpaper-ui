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
};

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
