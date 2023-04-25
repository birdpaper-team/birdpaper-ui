import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "type",
    remark: "提示类型",
    type: "Enum",
    optional: ["info", "success", "warning", "error"],
    default: "info",
  },
  { name: "clearable", remark: "是否允许关闭", type: "Boolean", default: "false" },
  { name: "title", remark: "提示标题", type: "String", default: "" },
];

export default list;
