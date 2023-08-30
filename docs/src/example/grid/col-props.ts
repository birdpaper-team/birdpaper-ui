import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  {
    name: "span",
    remark: "栏位数量 1-24",
    type: ["String", "Number"],
    default: "24",
  },
  {
    name: "offset",
    remark: "偏移量",
    type: ["String", "Number"],
    default: "",
  },
  {
    name: "xs",
    remark: "<768px 响应式栅格数或者栅格属性对象",
    type: ["ColResponsive", "Number"],
    default: "",
  },
  {
    name: "sm",
    remark: "≥768px 响应式栅格数或者栅格属性对象",
    type: ["ColResponsive", "Number"],
    default: "",
  },
  {
    name: "md",
    remark: "≥992px 响应式栅格数或者栅格属性对象",
    type: ["ColResponsive", "Number"],
    default: "",
  },
  {
    name: "lg",
    remark: "≥1200px 响应式栅格数或者栅格属性对象",
    type: ["ColResponsive", "Number"],
    default: "",
  },
  {
    name: "xl",
    remark: "≥1920px 响应式栅格数或者栅格属性对象",
    type: ["ColResponsive", "Number"],
    default: "",
  },
];

export default list;
