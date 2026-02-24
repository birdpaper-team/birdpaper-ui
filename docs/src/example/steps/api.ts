import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const stepsProps: PropItem[] = [
  { name: "v-model", remark: "当前步骤索引", type: ["Number"], default: 0 },
  {
    name: "type",
    remark: "方向",
    type: ["String"],
    optional: ["horizontal", "vertical"],
    default: "horizontal",
  },
  { name: "hide-line", remark: "是否隐藏连接线", type: ["Boolean"], default: false },
];

export const stepProps: PropItem[] = [
  { name: "index", remark: "步骤索引", type: ["Number"], default: 0 },
  {
    name: "status",
    remark: "状态",
    type: ["String"],
    optional: ["wait", "process", "finish", "error"],
    default: "wait",
  },
  { name: "description", remark: "描述", type: ["String"] },
  {
    name: "type",
    remark: "方向",
    type: ["String"],
    optional: ["horizontal", "vertical"],
    default: "horizontal",
  },
  { name: "hide-line", remark: "是否隐藏连接线", type: ["Boolean"], default: false },
];

export const stepsSlots: SlotItem[] = [{ name: "default", remark: "Step 列表" }];

export const stepSlots: SlotItem[] = [{ name: "default", remark: "标题内容" }];
