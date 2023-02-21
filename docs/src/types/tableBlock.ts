/** Props 属性类型 */
type PropType = "String" | "Number" | "Boolean" | "Array" | "Enum" | "Object" | "Function" | string;

/** Props 属性 */
interface PropsTableItem {
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
