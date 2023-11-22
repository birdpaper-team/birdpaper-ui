import { MethodTableItem } from "../../../components/table-block/src/tableBlock";

const list: MethodTableItem[] = [
  { name: "text", remark: "文本提示类型", params: "string | MessageItem", returns: "remove()" },
  { name: "success", remark: "成功提示类型", params: "string | MessageItem", returns: "remove()" },
  { name: "warning", remark: "警告提示类型", params: "string | MessageItem", returns: "remove()" },
  { name: "error", remark: "错误提示类型", params: "string | MessageItem", returns: "remove()" },
  { name: "loading", remark: "加载提示类型", params: "string | MessageItem", returns: "remove()" },
  { name: "removeAll", remark: "移除所有消息提示", params: "", returns: "" },
];

export default list;
