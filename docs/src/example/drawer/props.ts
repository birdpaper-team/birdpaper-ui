import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "v-model", remark: "抽屉显示状态", type: "Boolean", default: "false" },
  { name: "title", remark: "抽屉标题", type: "String", default: "标题" },
  {
    name: "title-align",
    remark: "标题对齐方式",
    type: "Enum",
    optional: ["left", "center", "right"],
    default: "left",
  },
  { name: "width", remark: "抽屉宽度", type: "String", default: "600px" },
  { name: "hide-footer", remark: "是否隐藏底部区域", type: "Boolean", default: "false" },
  { name: "hide-close", remark: "是否隐藏关闭图标", type: "Boolean", default: "false" },
  { name: "border", remark: "是否展示边框", type: "Boolean", default: "false" },
  { name: "mask-closable", remark: "点击遮罩是否关闭", type: "Boolean", default: "false" },
  { name: "ok-loading", remark: "确认按钮是否处于加载状态", type: "Boolean", default: "false" },
  { name: "ok-text", remark: "确定按钮内容", type: "String", default: "确认" },
  { name: "cancle-text", remark: "取消按钮内容", type: "String", default: "取消" },
  { name: "on-before-ok", remark: "触发确定前的回调，返回 false 则中断", type: "Function", default: "() => true" },
];

export default list;
