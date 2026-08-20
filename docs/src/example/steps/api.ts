import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const stepsProps: PropItem[] = [
  { name: "v-model", remark: "当前步骤索引",
    remarkEn: "Current step index", type: ["Number"], default: 0 },
  {
    name: "type",
    remark: "方向",
    remarkEn: "Direction",
    type: ["String"],
    optional: ["horizontal", "vertical"],
    default: "horizontal",
  },
  { name: "hide-line", remark: "是否隐藏连接线",
    remarkEn: "Whether to hide the connector", type: ["Boolean"], default: false },
];

export const stepProps: PropItem[] = [
  { name: "index", remark: "步骤索引",
    remarkEn: "Step index", type: ["Number"], default: 0 },
  {
    name: "status",
    remark: "状态",
    remarkEn: "Status",
    type: ["String"],
    optional: ["wait", "process", "finish", "error"],
    default: "wait",
  },
  { name: "description", remark: "描述",
    remarkEn: "Description", type: ["String"] },
  {
    name: "type",
    remark: "方向",
    remarkEn: "Direction",
    type: ["String"],
    optional: ["horizontal", "vertical"],
    default: "horizontal",
  },
  { name: "hide-line", remark: "是否隐藏连接线",
    remarkEn: "Whether to hide the connector", type: ["Boolean"], default: false },
];

export const stepsSlots: SlotItem[] = [{ name: "default", remark: "Step 列表",
    remarkEn: "Step list" }];

export const stepSlots: SlotItem[] = [{ name: "default", remark: "标题内容",
    remarkEn: "Title content" }];
