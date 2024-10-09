import { ExtractPropTypes, PropType } from "vue";
import { RadioType } from "./types";

export const radioProps = {
  value: { type: [String, Number, Boolean], default: false },
  disabled: { type: Boolean, default: false },
  type: { type: String as PropType<RadioType>, default: "radio" },
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;
