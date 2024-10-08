import _row from "./src/row.vue";
import _col from "./src/col.vue";

export const Row = _row;
export const Col = _col;


export * from "./src/types";
export * from "./src/props";
export type RowInstance = InstanceType<typeof Row>;
export type ColInstance = InstanceType<typeof Col>;
export default Row;
