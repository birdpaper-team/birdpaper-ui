import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "total", remark: "总数", type: "Number", default: "0" },
  { name: "current(v-model)", remark: "当前页", type: "Number", default: "1" },
  { name: "pageSize(v-model)", remark: "每页显示条数", type: "Number", default: "10" },
  { name: "sizesList", remark: "每页显示条数的选项", type: "Number[]", default: "[10, 20, 50, 100]" },
  { name: "prevText", remark: "上一页按钮文案", type: "String" },
  { name: "nextText", remark: "下一页按钮文案", type: "String" },
  {
    name: "layout",
    remark: "布局配置(拼接字符串)",
    type: "Enum",
    optional: ["total", "prev", "pager", "next", "sizes", "jumper"],
    default: "prev, pager, next",
  },
  { name: "maxPager", remark: "最大页码数", type: "Number", default: "7" },
  { name: "totalTmpString", remark: "总条数文案", type: "String", default: "共 {total} 条" },
  { name: "jumperTmpString", remark: "页码跳转文案", type: "String", default: "前往{jumper}" },
  { name: "sizesTmpString", remark: "每页条数选项文案", type: "String", default: "{value} 条/页" },
];

export default list;
