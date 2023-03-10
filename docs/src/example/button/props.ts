import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "type",
    remark: "按钮类型",
    type: "Enum",
    optional: ["normal", "primary", "plain", "dashed", "text"],
    default: "normal",
  },
  { name: "size", remark: "按钮尺寸", type: "String", default: "normal" },
  { name: "shape", remark: "按钮形状", type: "String", default: "square" },
  { name: "status", remark: "按钮状态", type: "String", default: "normal" },
  { name: "loading", remark: "是否加载", type: "Boolean", default: "false" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "icon", remark: "按钮图标", type: "String", default: "" },
  { name: "block", remark: "是否撑满父级", type: "Boolean", default: "false" },
];

export default list;
