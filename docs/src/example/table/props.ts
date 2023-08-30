import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "cols", remark: "表格头部列表", type: "Array", default: "[]" },
  { name: "data", remark: "表格数据", type: "Array", default: "[]" },
  { name: "height", remark: "固定高度", type: "String", default: "" },
  { name: "loading", remark: "加载状态", type: "Boolean", default: "false" },
  { name: "border", remark: "展示边框", type: "Boolean", default: "false" },
  { name: "stripe", remark: "斑马纹", type: "Boolean", default: "false" },
];

export default list;
