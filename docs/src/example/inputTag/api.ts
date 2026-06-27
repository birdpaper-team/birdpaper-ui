import { EventItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const inputTagProps: PropItem[] = [
  { name: "v-model", remark: "绑定值", type: ["Array"] },
  { name: "id", remark: "输入框 ID", type: ["String"] },
  { name: "name", remark: "输入框名称", type: ["String"] },
  { name: "placeholder", remark: "占位文本", type: ["String"], default: "" },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  { name: "max-tag-count", remark: "最多显示数量", type: ["Number"], default: 0 },
];

export const inputTagEvents: EventItem[] = [
  { name: "add", remark: "添加标签触发", params: "value: String" },
  { name: "remove", remark: "删除标签触发", params: "value: String, index: Number" },
];
