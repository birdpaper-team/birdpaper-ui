import { ExtractPropTypes, PropType } from "vue";
import { ColumnsItem } from "./types";

export const tableProps = {
  /**
   * @type Array
   * @description The table data source.
   * @default []
   */
  data: {
    type: Array,
    default: () => [],
  },
  /**
   * @type string
   * @description The table fixed height.
   * @default null
   */
  height: { type: String },
  /**
   * @type boolean
   * @description Bordered or not.
   * @default false
   */
  border: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Stripe or not.
   * @default false
   */
  stripe: { type: Boolean, default: false },
  /**
   * @type string
   * @description Unique key identifier for a table row.
   * @default "id"
   */
  rowKey: { type: String, default: "id" },
  /**
   * @type string
   * @description The text when data is empty.
   * @default "Empty."
   */
  emptyText: {
    type: String,
    default: "No Data",
  },
} as const;

/** Table header props. */
export const tableHeaderProps = {
  /**
   * @type ColumnsItem[]
   * @description The table header list.
   * @default []
   */
  list: {
    type: Array as PropType<ColumnsItem[]>,
    default: () => [],
  },
};

/** Table column props. */
export const tableColumnProps = {
  /**
   * @type string
   * @description The column title.
   */
  title: {
    type: String,
  },
  /**
   * @type object
   * @description The data record.
   * @default {}
   */
  record: {
    type: Object,
    default: () => {},
  },
  /**
   * @type string
   * @description The data key.
   */
  dataIndex: { type: String },
  /**
   * @type number
   * @description The record row index.
   */
  rowIndex: { type: Number },
  /**
   * @type number | string
   * @description The col width.
   */
  width: { type: [Number, String] },
  /**
   * @type number | string
   * @description The col min width.
   */
  minWidth: { type: [Number, String] },
  /**
   * @type string
   * @description The col text align type.
   * @default "left"
   */
  align: { type: String, default: "left" },
  /**
   * @type boolean
   * @description Text to omit ellipsis or not.
   * @default false
   */
  ellipsis: { type: Boolean, default: false },
  /**
   * @type boolean
   * @description Show tooltip or not.
   * @default false
   */
  tooltip: { type: Boolean, default: false },
};

export type TableProps = ExtractPropTypes<typeof tableProps>;
export type TableHeaderProps = ExtractPropTypes<typeof tableHeaderProps>;
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>;
