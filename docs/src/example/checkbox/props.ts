import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "绑定值", type: ["Boolean | Array<String | Number | Boolean>"], default: "false" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "value", remark: "复选框的值", type: ["String", "Number"], default: "" },
  { name: "indeterminate", remark: " 是否为不确定状态", type: "Boolean", default: "false" },
];

export default list;
