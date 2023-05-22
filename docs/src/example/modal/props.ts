import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "visible（v-model）", remark: "对话框显示状态", type: "Boolean", default: "false" },
  { name: "title", remark: "对话框标题", type: "String", default: "标题" },
  { name: "width", remark: "对话框宽度", type: "String", default: "600px" },
  { name: "top", remark: "对话框距离顶部高度", type: "String", default: "20vh" },
];

export default list;
