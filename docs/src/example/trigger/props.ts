import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "popup-visible(v-model)", remark: "触发器绑定值", type: "Boolean", default: "false" },
  { name: "trigger", remark: "触发方式", type: "enum", optional: ["click", "hover"], default: "click" },
  {
    name: "position",
    remark: "弹出位置",
    type: "enum",
    optional: ["top", "bottom", "left", "right"],
    default: "bottom",
  },
  { name: "popup-offset", remark: "距离弹出位置的偏移量", type: "Number", default: "10" },
  { name: "auto-fitWidth", remark: "弹出层是否填充触发器宽度", type: "Boolean", default: "false" },
  { name: "transition", remark: "过渡动画名称", type: "String", default: "fade" },
];

export default list;
