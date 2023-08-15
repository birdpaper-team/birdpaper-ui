import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "content", remark: "文本内容", type: " String", default: "" },
  { name: "type", remark: "类型", type: "Enum", optional: ["info", "success", "warning", "danger"], default: "info" },
  { name: "position", remark: "弹出位置", type: "Enum", optional: ["top", "bottom", "left", "right"], default: "top" },
  { name: "okText", remark: "确认按钮文本", type: "String", default: "确认" },
  { name: "cancleText", remark: "取消按钮文本", type: "String", default: "取消" },
  { name: "on-before-ok", remark: "触发确定前的回调，返回 false 则中断", type: "Function", default: "() => true" },
];

export default list;
