import { MethodTableItem } from "../../../components/table-block/src/tableBlock";

const list: MethodTableItem[] = [
  { name: "text", remark: "文本提示类型", params: "string | MessageConfig", returns: "close()" },
  { name: "success", remark: "成功提示类型", params: "string | MessageConfig", returns: "close()" },
  { name: "warning", remark: "警告提示类型", params: "string | MessageConfig", returns: "close()" },
  { name: "error", remark: "错误提示类型", params: "string | MessageConfig", returns: "close()" },
  { name: "loading", remark: "加载提示类型", params: "string | MessageConfig", returns: "close()" },
];

export default list;
