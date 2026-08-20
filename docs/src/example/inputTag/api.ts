import { EventItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const inputTagProps: PropItem[] = [
  { name: "v-model", remark: "绑定值",
    remarkEn: "Bound value", type: ["Array"] },
  { name: "id", remark: "输入框 ID",
    remarkEn: "Input id", type: ["String"] },
  { name: "name", remark: "输入框名称",
    remarkEn: "Input name", type: ["String"] },
  { name: "placeholder", remark: "占位文本",
    remarkEn: "Placeholder", type: ["String"], default: "" },
  { name: "disabled", remark: "是否禁用",
    remarkEn: "Whether disabled", type: ["Boolean"], default: false },
  { name: "max-tag-count", remark: "最多显示数量",
    remarkEn: "Max visible count", type: ["Number"], default: 0 },
];

export const inputTagEvents: EventItem[] = [
  { name: "add", remark: "添加标签触发",
    remarkEn: "Triggered when a tag is added", params: "value: String" },
  { name: "remove", remark: "删除标签触发",
    remarkEn: "Triggered when a tag is removed", params: "value: String, index: Number" },
];
