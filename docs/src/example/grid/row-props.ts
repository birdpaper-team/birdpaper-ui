import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "gutter",
    remark: "栏位间隔",
    type: ["String", "Number"],
  },
  {
    name: "justify",
    remark: "水平对齐方式",
    type: "Enum",
    optional: ["start", "center", "end", "around", "between", "evenly"],
    default: "start",
  },
  {
    name: "align",
    remark: "垂直对齐方式",
    type: "Enum",
    optional: ["start", "center", "end", "baseline", "stretch"],
    default: "start",
  },
];

export default list;
