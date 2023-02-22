/** Prop 表头 */
export const propHeader = [
  { label: "名称", key: "name" },
  { label: "说明", key: "remark" },
  { label: "类型", scope: { customRender: "type" } },
  { label: "默认值", key: "default" },
];

/** Event 表头 */
export const eventHeader = [
  { label: "名称", key: "name" },
  { label: "说明", key: "remark" },
  { label: "参数", key: "params" },
];

/** Method 表头 */
export const methodHeader = [
  { label: "名称", key: "name" },
  { label: "说明", key: "remark" },
  { label: "参数", key: "params" },
  { label: "返回值", key: "returns" },
];

/** Slot 表头 */
export const slotHeader = [
  { label: "名称", key: "name" },
  { label: "说明", key: "remark" },
  { label: "参数", key: "params" },
];

/** 表头 */
export const header = {
  props: propHeader,
  events: eventHeader,
  methods: methodHeader,
  slots: slotHeader,
};
/** Props 属性类型 */
export type PropType = "String" | "Number" | "Boolean" | "Array" | "Enum" | "Object" | "Function" | string;

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
}
