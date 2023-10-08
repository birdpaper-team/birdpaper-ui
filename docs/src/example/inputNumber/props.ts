import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "输入框绑定值", type: "Number" },
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
  { name: "placeholder", remark: "占位提示文字", type: "String" },
  { name: "hide-button", remark: "是否隐藏按钮", type: "Boolean", default: "false" },
  { name: "precision", remark: "数字精度", type: "Number" },
  { name: "step", remark: "数字变化步长", type: "Number" },
  { name: "min", remark: "最小值", type: "Number" },
  { name: "max", remark: "最大值", type: "Number" },
];

export default list;
