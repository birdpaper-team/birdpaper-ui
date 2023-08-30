import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "content", remark: "文本提示内容", type: "String", default: "" },
  { name: "trigger", remark: "触发方式", type: "Enum", optional: ["hover", "click"], default: "hover" },
];

export default list;
