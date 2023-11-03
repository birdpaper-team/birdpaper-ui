export interface ColumnsItem {
  title?: string;
  type: "inner" | "radio" | "checkbox";
  dataIndex?: string;
  width?: number;
  minWidth?: number;
  align: "left" | "center" | "right";
  scope?: {
    customRender: string;
  };
}

/** 选择器配置 */
export interface SelectionConfig {
  type: "radio" | "checkbox";
}

export type SelectedValue = Array<string | number>;