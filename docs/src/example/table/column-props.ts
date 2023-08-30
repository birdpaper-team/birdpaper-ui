import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "title", remark: "列标题", type: "String", default: "" },
  { name: "record", remark: "行记录", type: "Object", default: "{}" },
  { name: "data-index", remark: "列标识字段", type: "String", default: "" },
  { name: "row-index", remark: "行下标", type: "Number", default: "" },
  { name: "width", remark: "列宽度", type: ["Number", "String"], default: "" },
  { name: "min-width", remark: "最小列宽", type: ["Number", "String"], default: "" },
  { name: "align", remark: "对齐方式", type: "Enum", optional: ["left", "center", "right"], default: "left" },
  { name: "ellipsis", remark: "是否开启文本省略", type: "Boolean", default: "false" },
  { name: "tooltip", remark: "是否开启文本气泡提示", type: "Boolean", default: "false" },
];

export default list;
