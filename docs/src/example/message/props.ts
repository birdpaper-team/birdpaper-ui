import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "id", remark: "唯一ID", type: "String", default: "" },
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
  { name: "plain", remark: "是否开启无背景展示", type: "Boolean", default: "false" },
  { name: "position", remark: "消息提示的定位", type: "Enum", optional: ["top", "bottom"], default: "top" },
  { name: "onClose", remark: "关闭后的回调函数", type: "Function", default: "" },
];

export default list;
