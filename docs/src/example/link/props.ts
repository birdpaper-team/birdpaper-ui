import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "href", remark: "链接地址", type: "String", default: "javascript:;" },
  {
    name: "status",
    remark: "链接状态",
    type: "Enum",
    optional: ["normal", "primary", "success", "warning", "error"],
    default: "primary",
  },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "loading", remark: "是否加载状态", type: "Boolean", default: "false" },
];

export default list;
