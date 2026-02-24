import { EventItem, PropItem } from "../../.vitepress/components/api-block/src/types";

export const paginationProps: PropItem[] = [
  { name: "layout", remark: "布局配置", type: ["String"], default: "total, prev, pager, next, sizes, jumper" },
  { name: "disabled", remark: "是否禁用", type: ["Boolean"], default: false },
  {
    name: "size",
    remark: "尺寸",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "total", remark: "总条数", type: ["Number"], default: 0 },
  { name: "current", remark: "当前页", type: ["Number"], default: 1 },
  { name: "page-size", remark: "每页条数", type: ["Number"], default: 10 },
  { name: "sizes-list", remark: "可选页数列表", type: ["Array"], default: "[10, 20, 50, 100]" },
  { name: "prev-text", remark: "上一页文本", type: ["String"], default: "" },
  { name: "next-text", remark: "下一页文本", type: ["String"], default: "" },
  { name: "max-pager", remark: "最多页码数", type: ["Number"], default: 7 },
  { name: "total-tmp-string", remark: "总数文案", type: ["String"], default: "共 {total} 条" },
  { name: "jumper-tmp-string", remark: "跳转文案", type: ["String"], default: "前往{jumper}" },
  { name: "sizes-tmp-string", remark: "分页大小文案", type: ["String"], default: "{value} 条/页" },
];

export const paginationEvents: EventItem[] = [
  { name: "change", remark: "页码变化", params: "page: number" },
  { name: "size-change", remark: "分页大小变化", params: "pageSize: number" },
];
