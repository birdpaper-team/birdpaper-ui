import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "绑定值", type: ["String", "Number"], default: "" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "type", remark: "单选框组类型", type: "Enum", optional: ["radio", "button"], default: "radio" },
  { name: "direction", remark: "排列方向", type: "Enum", optional: ["vertical", "horizontal"], default: "horizontal" },
];

export default list;
