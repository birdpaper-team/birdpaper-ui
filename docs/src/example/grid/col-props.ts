import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "span",
    remark: "栏位数量 1-24",
    type: ["String", "Number"],
    default: "24",
  },
  {
    name: "offset",
    remark: "偏移量",
    type: ["String", "Number"],
    default: "",
  },
];

export default list;
