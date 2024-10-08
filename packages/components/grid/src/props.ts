import { ExtractPropTypes, PropType } from "vue";
import { Align, ColResponsive, Justify } from "./types";

export const rowProps = {
  /**
   * @type [string, number]
   * @description Grid spacing.
   */
  gutter: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * @type Justify
   * @description Horizontal alignment
   * @default "start"
   */
  justify: {
    type: String as PropType<Justify>,
    default: "start",
  },
  /**
   * @type Align
   * @description Vertical alignment
   * @default "start"
   */
  align: {
    type: String as PropType<Align>,
    default: "start",
  },
} as const;

export const colProps = {
  /**
   * @type number
   * @description 1-24 Number of fields 1-24.
   * @default 24
   */
  span: {
    type: Number,
    default: 24,
  },
  /**
   * @type number
   * @description Number of offset.
   * @default 0
   */
  offset: {
    type: Number,
    default: 0,
  },
  // <768px 响应式栅格数或者栅格属性对象
  xs: { type: [Object, Number] as PropType<ColResponsive> },
  // ≥768px 响应式栅格数或者栅格属性对象
  sm: { type: [Object, Number] as PropType<ColResponsive> },
  // ≥992px 响应式栅格数或者栅格属性对象
  md: { type: [Object, Number] as PropType<ColResponsive> },
  // ≥1200px 响应式栅格数或者栅格属性对象
  lg: { type: [Object, Number] as PropType<ColResponsive> },
  // ≥1920px 响应式栅格数或者栅格属性对象
  xl: { type: [Object, Number] as PropType<ColResponsive> },
} as const;

export type RowProps = ExtractPropTypes<typeof rowProps>;
export type ColProps = ExtractPropTypes<typeof colProps>;
