import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "选择器绑定值", type: ["String", "Number"], default: "" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "placeholder", remark: "占位提示文字", type: "String", default: "" },
];

export default list;
