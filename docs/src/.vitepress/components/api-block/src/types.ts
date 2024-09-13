export type ApiType = "prop" | "event" | "slot" | "method";

export type PropType = "String" | "Number" | "Boolean" | "Array" | "Enum" | "Object" | "Function" | string;

/** Props 属性 */
export interface PropItem {
  /** 属性名 */
  name: string;
  /** 说明 */
  remark: string;
  /** 类型 */
  type: PropType[];
  /** 可选值，type 为 enum 时可用 */
  optional?: string[] | string;
  /** 显示提示框 */
  showTip?: boolean;
  /** 默认值 */
  default?: string | number | boolean;
  /** 版本号 */
  version?: string;
}

/** Event 事件 */
export interface EventItem {
  /** 事件名 */
  name: string;
  /** 说明 */
  remark: string;
  /** 参数 */
  params?: string;
  /** 版本号 */
  version?: string;
  /** 显示提示框 */
  showTip?: boolean;
}

/** Method 方法 */
export interface MethodItem {
  /** 方法名 */
  name: string;
  /** 说明 */
  remark: string;
  /** 参数 */
  params?: string;
  /** 返回值 */
  returns?: string;
  /** 版本号 */
  version?: string;
  /** 显示提示框 */
  showTip?: boolean;
}

/** Slot 插槽 */
export interface SlotItem {
  /** 方法名 */
  name: string;
  /** 说明 */
  remark: string;
  /** 参数 */
  params?: string;
  /** 版本号 */
  version?: string;
  /** 显示提示框 */
  showTip?: boolean;
}
