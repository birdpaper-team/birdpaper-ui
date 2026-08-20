import { PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const linkProps: PropItem[] = [
  { name: "href", remark: "Link href", type: ["String"] },
  {
    name: "status",
    remark: "Status type",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "primary",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "loading", remark: "Whether loading", type: ["Boolean"], default: false },
  {
    name: "loading-icon",
    remark: "Loading icon",
    type: ["Number", "Icon"],
    optional: ["1", "2", "3", "4", "5", "Component"],
    default: 1,
  },
  {
    name: "size",
    remark: "Size",
    type: ["String"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "icon", remark: "Icon", type: ["Component"] },
  { name: "target", remark: "Open target", type: ["String"], default: "_self" },
];

export const linkSlots: SlotItem[] = [{ name: "default", remark: "Content" }];
