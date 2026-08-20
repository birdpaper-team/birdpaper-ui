import { EventItem, PropItem } from "../../../.vitepress/components/api-block/src/types";

export const inputTagProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["Array"] },
  { name: "id", remark: "Input id", type: ["String"] },
  { name: "name", remark: "Input name", type: ["String"] },
  { name: "placeholder", remark: "Placeholder", type: ["String"], default: "" },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "max-tag-count", remark: "Max visible count", type: ["Number"], default: 0 },
];

export const inputTagEvents: EventItem[] = [
  { name: "add", remark: "Triggered when a tag is added", params: "value: String" },
  { name: "remove", remark: "Triggered when a tag is removed", params: "value: String, index: Number" },
];
