export interface ColumnsItem {
  title?: string;
  key?: string;
  width?: number;
  minWidth?: number;
  scope?: {
    customRender: string;
  };
}
