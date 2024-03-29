import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "绑定值", type: "String", default: "" },
  {
    name: "size",
    remark: "按钮尺寸",
    type: "Enum",
    optional: ["mini", "small", "normal", "large"],
    default: "normal",
  },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "readonly", remark: "是否只读状态", type: "Boolean", default: "true" },
  { name: "is-danger", remark: "是否警示状态", type: "Boolean", default: "false" },
  { name: "placeholder", remark: "占位提示文字", type: "String", default: "" },
  { name: "clearable", remark: "是否允许清空", type: "Boolean", default: "false" },
  { name: "langs", remark: "语言包", type: "String", optional: ["en", "zh-cn"], default: "zh-cn" },
  { name: "value-format", remark: "值格式", type: "String", default: "YYYY-MM-DD" },
  { name: "hide-trigger", remark: "隐藏触发器", type: "Boolean", default: "false" },
];

export default list;
