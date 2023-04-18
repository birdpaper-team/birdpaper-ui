import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "type",
    remark: "消息提示类型",
    type: "Enum",
    optional: ["text", "success", "warning", "error", "loading"],
    default: "",
  },
  { name: "content", remark: "消息提示内容", type: "String", default: "" },
  { name: "duration", remark: "关闭延迟时间", type: "Number", default: "3000" },
  { name: "closeable", remark: "是否允许关闭", type: "Boolean", default: "false" },
];

export default list;
