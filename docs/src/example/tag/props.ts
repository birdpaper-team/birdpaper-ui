import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "status",
    remark: "标签状态",
    type: "Enum",
    optional: ["normal", "primary", "success", "warning", "danger"],
    default: "normal",
  },
  { name: "closeabled", remark: "是否支持关闭", type: "Boolean", default: "false" },
];

export default list;
