import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "单选框绑定值", type: ["String", "Number", "Boolean"], default: "" },
  { name: "value", remark: "选项的值", type: ["String", "Number", "Boolean"], default: "" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "type", remark: "单选框类型", type: "Enum", optional: ["radio", "button"], default: "radio" },
];

export default list;
