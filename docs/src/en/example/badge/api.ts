import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const badgeProps: PropItem[] = [
  { name: "text", remark: "Custom badge text; ignores count when set", type: ["String"] },
  { name: "count", remark: "Badge count", type: ["Number"], default: 0 },
  { name: "max-count", remark: "Max display count; excess shows as max-count+", type: ["Number"], default: 99 },
  { name: "dot", remark: "Whether to show as a dot", type: ["Boolean"], default: false },
  {
    name: "status",
    remark: "Badge status type",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  { name: "offset", remark: "Badge offset [top, right]", type: ["Array"], default: "[-2, -6]" },
];

export const badgeSlots: SlotItem[] = [{ name: "default", remark: "Content the badge attaches to" }];
