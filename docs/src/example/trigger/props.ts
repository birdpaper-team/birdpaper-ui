import { PropTableItem } from "../../../components/table-block/src/tableBlock";

const list: PropTableItem[] = [
  { name: "popup-visible(v-model)", remark: "触发器绑定值", type: "Boolean", default: "false" },
  { name: "trigger", remark: "触发方式", type: "Enum", optional: ["click", "hover"], default: "click" },
  {
    name: "position",
    remark: "弹出位置",
    type: "Enum",
    optional: ["top", "bottom", "left", "right"],
    default: "bottom",
  },
  { name: "popup-offset", remark: "距离弹出位置的偏移量", type: "Number", default: "10" },
  { name: "popup-translate", remark: "距离弹出位置的移动距离", type: "[Number, Number]", default: "[0, 0]" },
  { name: "auto-fitWidth", remark: "弹出层是否填充触发器宽度", type: "Boolean", default: "false" },
  { name: "transition", remark: "过渡动画名称", type: "String", default: "fade" },
  { name: "click-outside", remark: "点击其他元素关闭触发器", type: "Boolean", default: "true" },
  { name: "disabled", remark: "是否禁用", type: "Boolean", default: "false" },
  { name: "hideTrigger", remark: "隐藏触发器", type: "Boolean", default: "false" },
  { name: "updateAtScroll", remark: "是否跟随滚动元素更新", type: "Boolean", default: "false" },
  { name: "scrollToClose", remark: "是否在滚动时关闭", type: "Boolean", default: "false" },
  { name: "scrollToCloseTime", remark: "滚动触发关闭的时间", type: "Number", default: "400" },
];

export default list;
