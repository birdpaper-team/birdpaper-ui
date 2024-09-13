import { EventItem, PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const buttonProps: PropItem[] = [
  { name: "type", remark: "按钮类型", type: ["ButtonType"], optional: ["secondary", "normal", "plain", "dashed", "text"], default: "secondary" },
  { name: "attrType", remark: "原生Type属性", type: ["ButtonNavtiveType"], optional: ["button", "submit", "reset"], default: "button" },
  { name: "status", remark: "按钮状态", type: ["ButtonStatus"], optional: ["gary", "primary", "success", "warning", "danger"], default: "gary" },
  { name: "size", remark: "按钮尺寸", type: ["ButtonSize"], optional: ["mini", "small", "default", "large"], default: "default" },
  { name: "shape", remark: "按钮形状", type: ["ButtonShape"], optional: ["square", "round", "circle"], default: "square" },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "loading", remark: "是否加载", type: ["Boolean"], default: false },
  { name: "loadingIcon", remark: "加载图标", type: ["Number", "ButtonIcon"], default: 1 },
  { name: "full", remark: "宽度是否撑满", type: ["Boolean"], default: false },
  { name: "icon", remark: "按钮图标", type: ["ButtonIcon"] },
];

export const buttonEvents: EventItem[] = [{ name: "click", remark: "点击触发", params: "--" }];

export const buttonSlots: SlotItem[] = [{ name: "default", remark: "默认插槽" }];
