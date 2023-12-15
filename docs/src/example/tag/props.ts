import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "icon",
    remark: "图标组件",
    type: "BirdpaperIcon",
    default: "",
  },
  {
    name: "status",
    remark: "标签状态",
    type: "Enum",
    optional: ["normal", "primary", "success", "warning", "danger"],
    default: "normal",
  },
  {
    name: "dot",
    remark: "状态是否为点状样式",
    type: "Boolean",
    default: "false",
  },
  { name: "closeable", remark: "是否支持关闭", type: "Boolean", default: "false" },
];

export default list;
