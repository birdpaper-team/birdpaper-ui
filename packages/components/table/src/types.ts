export interface ColumnsItem {
  title?: string;
  type: "inner" | "radio" | "checkbox";
  dataIndex?: string;
  width?: number;
  minWidth?: number;
  align: "left" | "center" | "right";
}