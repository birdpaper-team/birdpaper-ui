import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "label",
    remark: "标签文本",
    type: "String",
  },
  {
    name: "field",
    remark: "数据对象路径",
    type: "String",
  },
  {
    name: "rules",
    remark: "表单校验规则",
    type: "Record<string, RuleItem[]>",
  },
  {
    name: "labelStyle",
    remark: "标签区域样式",
    type: [" Object", "String"],
  },
  {
    name: "wrapperStyle",
    remark: "控件区域样式",
    type: [" Object", "String"],
  },
];

export default list;
