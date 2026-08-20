import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const stepsProps: PropItem[] = [
  { name: "v-model", remark: "Current step index", type: ["Number"], default: 0 },
  {
    name: "type",
    remark: "Direction",
    type: ["String"],
    optional: ["horizontal", "vertical"],
    default: "horizontal",
  },
  { name: "hide-line", remark: "Whether to hide the connector", type: ["Boolean"], default: false },
];

export const stepProps: PropItem[] = [
  { name: "index", remark: "Step index", type: ["Number"], default: 0 },
  {
    name: "status",
    remark: "Status",
    type: ["String"],
    optional: ["wait", "process", "finish", "error"],
    default: "wait",
  },
  { name: "description", remark: "Description", type: ["String"] },
  {
    name: "type",
    remark: "Direction",
    type: ["String"],
    optional: ["horizontal", "vertical"],
    default: "horizontal",
  },
  { name: "hide-line", remark: "Whether to hide the connector", type: ["Boolean"], default: false },
];

export const stepsSlots: SlotItem[] = [{ name: "default", remark: "Step list" }];

export const stepSlots: SlotItem[] = [{ name: "default", remark: "Title content" }];
