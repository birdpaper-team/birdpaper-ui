import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "value", remark: "选项的值", type: ["String", "Number"], default: "" },
  { name: "label", remark: "选项文本内容", type: "String", default: "" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
];

export default list;
