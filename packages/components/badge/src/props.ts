import { ExtractPropTypes, PropType } from "vue";

export const badgeProps = {
  /**
   * @type string
   * @description The custom text.
   */
  text: {
    type: String,
  },
  /**
   * @type number
   * @description The count number.
   * @default 0
   */
  count: {
    type: Number,
    default: 0,
  },
  /**
   * @type number
   * @description The max count number.
   * @default 99
   */
  maxCount: {
    type: Number,
    default: 99,
  },
  /**
   * @type boolean
   * @description Whether to show as a dot.
   * @default false
   */
  dot: {
    type: Boolean,
    default: false,
  },
  /**
   * @type string
   * @description The status.
   * @default "primary"
   */
  status: {
    type: String as PropType<"gray" | "primary" | "success" | "warning" | "danger">,
    default: "primary",
  },
  /**
   * @type Array<number>
   * @description The offset position [x, y].
   * @default [0, 0]
   */
  offset: {
    type: Array as PropType<number[]>,
    default: () => [-2, -6],
  },
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
