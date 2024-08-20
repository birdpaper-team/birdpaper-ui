import { ExtractPropTypes, PropType } from "vue";
import { ButtonShape, ButtonSize, ButtonStatus, ButtonType } from "./types";

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: "normal",
  },
  status: {
    type: String as PropType<ButtonStatus>,
    default: "normal",
  },
  size:{
    type: String as PropType<ButtonSize>,
    default: "normal",
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: "square",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
