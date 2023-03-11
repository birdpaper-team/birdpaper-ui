/**
 * @ Author: Sam
 * @ Create Time: 2023-02-22 20:18:08
 * @ Modified by: Sam
 * @ Modified time: 2023-03-11 14:41:58
 */

/** Prop 表头 */
export const propHeader = [
  { label: "名称", scope: { customRender: "name" }, width: "140" },
  { label: "说明", scope: { customRender: "remark" } },
  { label: "类型", scope: { customRender: "type" } },
  { label: "默认值", scope: { customRender: "default" } },
];

/** Event 表头 */
export const eventHeader = [
  { label: "名称", scope: { customRender: "name" }, width: "140" },
  { label: "说明", scope: { customRender: "remark" } },
  { label: "参数", scope: { customRender: "params" } },
];

/** Method 表头 */
export const methodHeader = [
  { label: "名称", scope: { customRender: "name" }, width: "140" },
  { label: "说明", scope: { customRender: "remark" } },
  { label: "参数", scope: { customRender: "params" } },
  { label: "返回值", scope: { customRender: "returns" } },
];

/** Slot 表头 */
export const slotHeader = [
  { label: "名称", scope: { customRender: "name" }, width: "140" },
  { label: "说明", scope: { customRender: "remark" } },
  { label: "参数", scope: { customRender: "params" } },
];

/** 表头 */
export const header = {
  props: propHeader,
  events: eventHeader,
  methods: methodHeader,
  slots: slotHeader,
};
/** Props 属性类型 */
export type PropType = "String" | "Number" | "Boolean" | "Array" | "Enum" | "Object" | "Function";

/** Props 属性 */
export interface PropTableItem {
  /** 属性名 */
  name: string;
  /** 说明 */
  remark: string;
  /** 类型 */
  type: PropType | PropType[];
  /** 可选值，type 为 enum 时可用 */
  optional?: string[] | string;
  /** 显示提示框 */
  showTip?: boolean;
  /** 默认值 */
  default?: string;
  /** 版本号 */
  version?: string;
}

/** Event 事件 */
export interface EventTableItem {
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
export interface MethodTableItem {
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
export interface SlotTableItem {
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
