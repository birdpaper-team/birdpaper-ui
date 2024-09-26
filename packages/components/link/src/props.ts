import { Component, ExtractPropTypes, PropType } from "vue";
import { LinkStatus } from "./types";
import { ButtonLoadingIcon } from "@birdpaper-ui/components/button/src/types";

export const linkProps = {
  /**
   * @type string
   * @description Link href.
   */
  href: { type: String },
  /**
   * @type LinkStatus
   * @description Link status.
   * @default "primary"
   */
  status: { type: String as PropType<LinkStatus>, default: "primary" },
  /**
   * @type boolean
   * @description Link is disabled or not.
   * @default false
   */
  disabled: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Link is loading or not.
   * @default false
   */
  loading: { type: Boolean, default: false },
  /**
   * @type ButtonLoadingIcon
   * @description The default icon number which 1-5 or icon component.
   * @default 1
   */
  loadingIcon: {
    type: [Number, Object] as PropType<ButtonLoadingIcon>,
    validator: (val: unknown) => {
      if (typeof val === "number") {
        return [1, 2, 3, 4, 5].includes(val);
      }
      return typeof val === "object";
    },
    default: 1,
  },
  /**
   * @type Component
   * @description Button icon component.
   * @default null
   */
  icon: {
    type: Object as PropType<Component>,
    default: () => null,
  },
  /**
   * @string
   * @description Link Target
   * @default "_self"
   */
  target: { type: String, default: "_self" },
};

export type LinkProps = ExtractPropTypes<typeof linkProps>;
