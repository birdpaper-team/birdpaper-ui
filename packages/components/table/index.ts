import _table from "./src/table.vue";
import _tableColumn from "./src/components/table-column.vue";

export const Table = _table;
export const TableColumn = _tableColumn;

export * from "./src/props";
export * from "./src/types";

export type TableInstance = InstanceType<typeof Table>;
export type TableColumnInstance = InstanceType<typeof TableColumn>;
export default Table;
