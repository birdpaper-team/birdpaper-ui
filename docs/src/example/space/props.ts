import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "size",
    remark: "间距大小",
    type: ["Enum", "Number"],
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
];

export default list;
