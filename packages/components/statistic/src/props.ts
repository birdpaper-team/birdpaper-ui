import { ExtractPropTypes } from "vue";

export const statisticProps = {
  /**
   * @type {number}
   * @description The number to be formatted.
   */
  value: {
    type: Number,
  },
  /**
   * @type {string}
   * @description The placeholder text.
   * @default "--"
   */
  placeholder: {
    type: String,
    default: "--",
  },
  /**
   * @type {string}
   * @description Separator for thousands.
   * @default ","
   */
  separator: {
    type: String,
    default: ",",
  },
  /**
   * @type {boolean}
   * @description Whether to show the separator.
   * @default false
   */
  showSeparator: {
    type: Boolean,
    default: false,
  },
  /**
   * @type {string}
   * @description The text color.
   */
  color: {
    type: String,
  },
  /**
   * @type {string}
   * @description The unit of the statistic.
   */
  unit: {
    type: String,
  },
  /**
   * @type {number}
   * @description The number of decimal places to display.
   * @default 0
   */
  precision: {
    type: Number,
    default: 0,
  },
  /**
   * @type {string|array}
   * @description The font size of the statistic.
   * @default "26px"
   * @example "26px" | ["26px", "20px"]
   */
  fontSize: {
    type: [String, Array],
    default: "26px",
  },
  /**
   * @type {boolean}
   * @description Whether to open the animation.
   * @default false
   */
  animation: {
    type: Boolean,
    default: false,
  },
  /**
   * @type {number}
   * @description The animation time.
   * @default 1000
   */
  duration: {
    type: Number,
    default: 1000,
  },
  /**
   * @type {number}
   * @description The animation value from.
   * @default 0
   */
  valueFrom: {
    type: Number,
    default: 0,
  },
};

export type StatisticProps = ExtractPropTypes<typeof statisticProps>;
