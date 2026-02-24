import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const modalProps: PropItem[] = [
  { name: "v-model", remark: "是否显示", type: ["Boolean"], default: false },
  { name: "is-method", remark: "是否通过方法调用", type: ["Boolean"], default: false },
  {
    name: "type",
    remark: "类型",
    type: ["String"],
    optional: ["info", "success", "warning", "error", "confirm"],
  },
  { name: "title", remark: "标题", type: ["String"], default: "" },
  { name: "content", remark: "内容", type: ["String"] },
  { name: "width", remark: "宽度", type: ["String", "Number"], default: "50%" },
  { name: "body-class", remark: "内容区域样式类", type: ["String"] },
  { name: "border-radius", remark: "圆角", type: ["String"], default: "8px" },
  { name: "center", remark: "是否居中", type: ["Boolean"], default: false },
  { name: "show-border", remark: "是否显示边框", type: ["Boolean"], default: true },
  { name: "top", remark: "距离顶部", type: ["String"], default: "0" },
  { name: "bottom", remark: "距离底部", type: ["String"], default: "0" },
  { name: "mask-closable", remark: "点击遮罩是否关闭", type: ["Boolean"], default: true },
  { name: "hide-header", remark: "是否隐藏头部", type: ["Boolean"], default: false },
  { name: "hide-footer", remark: "是否隐藏底部", type: ["Boolean"], default: false },
  { name: "hide-close", remark: "是否隐藏关闭按钮", type: ["Boolean"], default: false },
  { name: "fullscreen", remark: "是否全屏", type: ["Boolean"], default: false },
  { name: "ok-text", remark: "确认按钮文字", type: ["String"], default: "确认" },
  { name: "ok-btn-props", remark: "确认按钮属性", type: ["Object"] },
  { name: "cancel-text", remark: "取消按钮文字", type: ["String"], default: "取消" },
  { name: "cancel-btn-props", remark: "取消按钮属性", type: ["Object"] },
  { name: "hide-cancel", remark: "是否隐藏取消按钮", type: ["Boolean"], default: false },
  { name: "hide-title-icon", remark: "是否隐藏标题图标", type: ["Boolean"], default: false },
  { name: "on-before-ok", remark: "确认前回调", type: ["Function"] },
];

export const modalEvents: EventItem[] = [
  { name: "cancel", remark: "取消触发" },
  { name: "confirm", remark: "确认触发" },
];

export const modalSlots: SlotItem[] = [
  { name: "default", remark: "内容" },
  { name: "header", remark: "头部" },
  { name: "footer", remark: "底部" },
];
