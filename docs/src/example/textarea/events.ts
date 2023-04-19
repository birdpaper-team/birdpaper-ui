import { EventTableItem } from "../../../components/table-block/src/tableBlock";

const list: EventTableItem[] = [
  { name: "input", remark: "输入内容触发", params: "none" },
  { name: "focus", remark: "聚焦触发", params: "none" },
  { name: "blur", remark: "失焦触发", params: "none" },
  { name: "keyup", remark: "键盘按下触发", params: "none" },
  { name: "keypress", remark: "按下回车时触发", params: "none" },
];

export default list;
