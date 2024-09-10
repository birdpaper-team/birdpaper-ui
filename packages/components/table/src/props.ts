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
   * @type String
   * @description The table fixed height.
   * @default null
   */
  height: { type: String },
  /**
   * @type Boolean
   * @description Bordered or not.
   * @default false
   */
  border: { type: Boolean, default: false },
  /**
   * @type Boolean
   * @description Stripe or not.
   * @default false
   */
  stripe: { type: Boolean, default: false },
  /**
   * @type String
   * @description Unique key identifier for a table row.
   * @default "id"
   */
  rowKey: { type: String, default: "id" },
  /**
   * @type String
   * @description The text when data is empty.
   * @default "Empty."
   */
  emptyText: {
    type: String,
    default: "Empty.",
  },
} as const;

/** Table header props. */
export const tableHeaderProps = {
  list: {
    type: Array as PropType<ColumnsItem[]>,
    default: () => [],
  },
};

/** Table column props. */
export const tableColumnProps = {
  /**
   * @description The column title
   */
  title: { type: String },
  record: { type: Object, default: () => {} },
  dataIndex: { type: String, default: "" },
  rowIndex: { type: Number },
  width: { type: [Number, String] },
  minWidth: { type: [Number, String] },
  align: { type: String, default: "left" },
  ellipsis: { type: Boolean, default: false },
  tooltip: { type: Boolean, default: false },
};

export type TableProps = ExtractPropTypes<typeof tableProps>;
export type TableHeaderProps = ExtractPropTypes<typeof tableHeaderProps>;
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>;
