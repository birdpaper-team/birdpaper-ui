import { PropItem, SlotItem } from "../../.vitepress/components/api-block/src/types";

export const badgeProps: PropItem[] = [
  { name: "text", remark: "自定义徽章文本，设置后忽略 count",
    remarkEn: "Custom badge text; ignores count when set", type: ["String"] },
  { name: "count", remark: "徽章数值",
    remarkEn: "Badge count", type: ["Number"], default: 0 },
  { name: "max-count", remark: "最大显示数值，超出显示为 max-count+",
    remarkEn: "Max display count; excess shows as max-count+", type: ["Number"], default: 99 },
  { name: "dot", remark: "是否显示为小圆点",
    remarkEn: "Whether to show as a dot", type: ["Boolean"], default: false },
  {
    name: "status",
    remark: "徽章状态类型",
    remarkEn: "Badge status type",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  { name: "offset", remark: "徽章偏移量 [top, right]",
    remarkEn: "Badge offset [top, right]", type: ["Array"], default: "[-2, -6]" },
];

export const badgeSlots: SlotItem[] = [{ name: "default", remark: "徽章附着的内容",
    remarkEn: "Content the badge attaches to" }];
