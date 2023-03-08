import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "type", remark: "按钮类型", type: "string", default: "normal" },
  { name: "size", remark: "按钮尺寸", type: "string", default: "normal" },
  { name: "shape", remark: "按钮形状", type: "string", default: "square" },
  { name: "status", remark: "按钮状态", type: "string", default: "normal" },
  { name: "loading", remark: "是否加载", type: "boolean", default: "false" },
  { name: "disabled", remark: "是否禁用", type: "boolean", default: "false" },
  { name: "icon", remark: "按钮图标", type: "String", default: "" },
  { name: "block", remark: "是否撑满父级", type: "boolean", default: "false" },
];

export default list;
