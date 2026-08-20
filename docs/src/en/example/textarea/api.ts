import { EventItem, MethodItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const textareaProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["String"] },
  { name: "id", remark: "Input id", type: ["String"] },
  { name: "name", remark: "Input name", type: ["String"] },
  { name: "placeholder", remark: "Placeholder", type: ["String"] },
  {
    name: "size",
    remark: "Input size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "maxlength", remark: "Max length", type: ["Number"] },
  { name: "show-limit", remark: "Whether to show length limit", type: ["Boolean"], default: "false" },
  {
    name: "word-count-mode",
    remark: "Word-count mode",
    type: ["WordCountMode"],
    optional: ["default", "chinese-english", "custom"],
    default: "default",
  },
  { name: "custom-word-count", remark: "Custom word-count function", type: ["Function"], default: "null" },
  { name: "readonly", remark: "Whether readonly", type: ["Boolean"], default: "false" },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: "false" },
  { name: "clearable", remark: "Whether clearable", type: ["Boolean"], default: "false" },
  { name: "rows", remark: "Number of rows", type: ["Number"], default: "3" },
];

export const textareaEvents: EventItem[] = [
  { name: "input", remark: "Triggered on input", params: "{ev: Event, value: String}" },
  { name: "focus", remark: "Triggered on focus", params: "ev: Event" },
  { name: "blur", remark: "Triggered on blur", params: "ev: Event" },
  { name: "keypress", remark: "Triggered on keydown", params: "ev: Event" },
  { name: "keyup", remark: "Triggered on keyup", params: "ev: Event" },
];

export const textareaSlots: SlotItem[] = [{ name: "suffix", remark: "Suffix content" }];

export const textareaMethods: MethodItem[] = [
  { name: "focus", remark: "Focus" },
  { name: "blur", remark: "Blur" },
  { name: "clear", remark: "Clear the input" },
];
