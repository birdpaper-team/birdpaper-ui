import { EventItem, MethodItem, PropItem } from "../../../.vitepress/components/api-block/src/types";

export const inputNumberProps: PropItem[] = [
  { name: "v-model", remark: "Bound value", type: ["Number", "String"] },
  { name: "id", remark: "Input id", type: ["String"] },
  { name: "name", remark: "Input name", type: ["String"] },
  { name: "placeholder", remark: "Placeholder", type: ["String"], default: "" },
  {
    name: "size",
    remark: "Input size",
    type: ["InputSize"],
    optional: ["mini", "small", "default", "large"],
    default: "default",
  },
  { name: "unit", remark: "Unit", type: ["String"] },
  { name: "hide-button", remark: "Whether to hide step buttons", type: ["Boolean"], default: false },
  { name: "precision", remark: "Decimal precision", type: ["Number"] },
  { name: "step", remark: "Step value", type: ["Number"], default: 1 },
  { name: "min", remark: "Min value", type: ["Number"], default: "Number.MIN_SAFE_INTEGER" },
  { name: "max", remark: "Max value", type: ["Number"], default: "Number.MAX_SAFE_INTEGER" },
  { name: "readonly", remark: "Whether readonly", type: ["Boolean"], default: false },
  { name: "disabled", remark: "Whether disabled", type: ["Boolean"], default: false },
  { name: "nan-to-zero", remark: "Whether to convert NaN to 0", type: ["Boolean"], default: false },
  {
    name: "model-event",
    remark: "Triggered on update",
    type: ["String"],
    optional: ["input", "change"],
    default: "input",
  },
];

export const inputNumberEvents: EventItem[] = [
  { name: "input", remark: "Triggered on input", params: "value: Number" },
  { name: "blur", remark: "Triggered on blur", params: "--" },
  { name: "step", remark: "Triggered on step", params: "value: Number" },
];

export const inputNumberMethods: MethodItem[] = [
  { name: "focus", remark: "Focus" },
  { name: "blur", remark: "Blur" },
  { name: "getStringValue", remark: "Get the formatted string" },
];
