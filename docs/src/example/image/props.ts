import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "src", remark: "图片资源地址", type: "String", default: "" },
  {
    name: "fit",
    remark: "图片适应类型",
    type: "Enum",
    optional: ["contain", "cover", "fill", "none", "scale-down"],
    default: "normal",
  },
  { name: "alt", remark: "文字描述", type: "String", default: "" },
  { name: "title", remark: "标题", type: "String", default: "" },
  { name: "width", remark: "图片宽度", type: ["String", "Number"], default: "" },
  { name: "height", remark: "图片高度", type: ["String", "Number"], default: "" },
];

export default list;
