import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model:visible", remark: "对话框显示状态", type: "Boolean", default: "false" },
  { name: "title", remark: "对话框标题", type: "String", default: "标题" },
  {
    name: "title-align",
    remark: "标题对齐方式",
    type: "Enum",
    optional: ["left", "center", "right"],
    default: "left",
  },
  { name: "width", remark: "对话框宽度", type: "String", default: "600px" },
  { name: "top", remark: "对话框距离顶部高度", type: "String", default: "20vh" },
  { name: "hide-footer", remark: "是否隐藏底部区域", type: "Boolean", default: "false" },
  { name: "hide-close", remark: "是否隐藏关闭图标", type: "Boolean", default: "false" },
  { name: "border", remark: "是否展示边框", type: "Boolean", default: "false" },
  { name: "mask-closable", remark: "点击遮罩是否关闭", type: "Boolean", default: "false" },
];

export default list;
