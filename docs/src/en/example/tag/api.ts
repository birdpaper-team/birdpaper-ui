import { EventItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const tagProps: PropItem[] = [
  { name: "icon", remark: "Icon component", type: ["Component"] },
  {
    name: "status",
    remark: "Tag status",
    type: ["String"],
    optional: ["gray", "primary", "success", "warning", "danger"],
    default: "gray",
  },
  { name: "border", remark: "Whether bordered", type: ["Boolean"], default: false },
  { name: "closeable", remark: "Whether closable", type: ["Boolean"], default: false },
];

export const tagEvents: EventItem[] = [{ name: "close", remark: "Triggered when the close button is clicked" }];

export const tagSlots: SlotItem[] = [{ name: "default", remark: "Label content" }];
