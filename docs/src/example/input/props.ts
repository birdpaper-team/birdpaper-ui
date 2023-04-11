import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "输入框绑定值", type: "String", default: "" },
  {
    name: "type",
    remark: "输入框类型",
    type: "Enum",
    optional: ["text", "password"],
    default: "text",
  },
  {
    name: "size",
    remark: "按钮尺寸",
    type: "Enum",
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "readonly", remark: "是否只读状态", type: "Boolean", default: "false" },
  { name: "is-danger", remark: "是否警示状态", type: "Boolean", default: "false" },
  { name: "placeholder", remark: "占位提示文字", type: "String", default: "" },
  { name: "maxlength", remark: "限制输入最大长度", type: "Number", default: "" },
  { name: "showLimit", remark: "是否展示字数限制提示", type: "Boolean", default: "false" },
  { name: "clearable", remark: "是否允许清空", type: "Boolean", default: "false" },
];

export default list;
