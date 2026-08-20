import { EventItem, PropItem } from "../../../.vitepress/components/api-block/src/types";

export const paginationProps: PropItem[] = [
  { name: "layout", remark: "Layout config", type: ["String"], default: "total, prev, pager, next, sizes, jumper" },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  {
    name: "size",
    remark: "Size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "total", remark: "Total", type: ["Number"], default: 0 },
  { name: "current", remark: "Current page", type: ["Number"], default: 1 },
  { name: "page-size", remark: "Page size", type: ["Number"], default: 10 },
  { name: "sizes-list", remark: "Page size options", type: ["Array"], default: "[10, 20, 50, 100]" },
  { name: "prev-text", remark: "Previous page text", type: ["String"], default: "" },
  { name: "next-text", remark: "Next page text", type: ["String"], default: "" },
  { name: "max-pager", remark: "Max pager count", type: ["Number"], default: 7 },
  { name: "total-tmp-string", remark: "Total text template", type: ["String"], default: "Total {total} items" },
  { name: "jumper-tmp-string", remark: "Jumper text template", type: ["String"], default: "Go to {jumper}" },
  { name: "sizes-tmp-string", remark: "Page size text template", type: ["String"], default: "{value} / page" },
];

export const paginationEvents: EventItem[] = [
  { name: "change", remark: "Triggered when page changes", params: "page: number" },
  { name: "size-change", remark: "Triggered when page size changes", params: "pageSize: number" },
];
