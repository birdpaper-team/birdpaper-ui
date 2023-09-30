import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "model",
    remark: "表单数据对象",
    type: "Object",
  },
  {
    name: "rules",
    remark: "表单校验规则",
    type: "Record<string, RuleItem[]>",
  },
  {
    name: "layout",
    remark: "布局方式",
    type: ["Enum"],
    optional: ["vertical", "horizontal", "inline"],
    default: "horizontal",
  }
];

export default list;
