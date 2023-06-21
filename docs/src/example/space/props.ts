import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "size",
    remark: "间距大小",
    type: ["Enum", "Number"],
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
  {
    name: "type",
    remark: "布局类型",
    type: ["Enum"],
    optional: ["vertical", "horizontal"],
    default: "horizontal",
  },
  {
    name: "justify",
    remark: "水平对其方式",
    type: ["String"],
    default: "flex-start",
  },
];

export default list;
