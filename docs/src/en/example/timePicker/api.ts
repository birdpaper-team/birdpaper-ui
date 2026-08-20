import { EventItem, PropItem } from "../../../.vitepress/components/api-block/src/types";

export const timePickerProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["String"], default: "" },
  { name: "name", remark: "Input name", type: ["String"] },
  { name: "placeholder", remark: "Placeholder", type: ["String"], default: "" },
  {
    name: "size",
    remark: "Size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "clearable", remark: "Whether clearable", type: ["Boolean"], default: false },
  { name: "value-format", remark: "Value format", type: ["String"], default: "YYYY-MM-DD" },
  { name: "hide-trigger", remark: "Whether to hide the trigger", type: ["Boolean"], default: false },
];

export const timePickerEvents: EventItem[] = [
  { name: "input", remark: "Triggered on input" },
  { name: "blur", remark: "Triggered on blur" },
];
