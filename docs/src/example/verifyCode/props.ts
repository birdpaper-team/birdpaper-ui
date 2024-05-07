import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "输入框绑定值", type: "String", default: "" },
  {
    name: "size",
    remark: "输入框尺寸",
    type: "Enum",
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
  { name: "length", remark: "验证码长度", type: "Number", default: "6" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "readonly", remark: "是否只读状态", type: "Boolean", default: "false" },
  { name: "is-danger", remark: "是否警示状态", type: "Boolean", default: "false" },
  { name: "is-password", remark: "是否匿文模式", type: "Boolean", default: "false" },
];

export default list;
