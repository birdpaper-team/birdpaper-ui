import { EventItem, MethodItem, PropItem, SlotItem } from "../../../.vitepress/components/api-block/src/types";

export const formProps: PropItem[] = [
  { name: "model", remark: "Form model", type: ["Object"] },
  { name: "rules", remark: "Validation rules", type: ["Rules"] },
  { name: "label-width", remark: "Label width", type: ["String", "Number"], default: "80px" },
  {
    name: "label-position",
    remark: "Label position",
    type: ["String"],
    optional: ["right", "left", "top"],
    default: "right",
  },
  {
    name: "layout",
    remark: "Form layout",
    type: ["String"],
    optional: ["vertical", "inline"],
    default: "vertical",
  },
];

export const formItemProps: PropItem[] = [
  { name: "label", remark: "Label text", type: ["String"], default: "" },
  { name: "field", remark: "Field name", type: ["String"], default: "" },
  { name: "required", remark: "Whether required", type: ["Boolean"], default: false },
  { name: "width", remark: "Label width", type: ["String", "Number"] },
  { name: "show-colon", remark: "Whether to show a colon", type: ["Boolean"], default: false },
  { name: "rules", remark: "Form item validation rules", type: ["Rules"] },
  { name: "auto-validate", remark: "Validate on blur", type: ["Boolean"], default: false },
];

export const formEvents: EventItem[] = [
  { name: "submit", remark: "Triggered on submit", params: "{ isValid: Boolean, model: Object }" },
];

export const formMethods: MethodItem[] = [
  { name: "validate", remark: "Validate the form", returns: "Promise<Boolean>" },
  { name: "clearValidate", remark: "Clear validation results", params: "fields?: string[]" },
  { name: "resetFields", remark: "Reset field values" },
];

export const formSlots: SlotItem[] = [{ name: "default", remark: "Form content" }];

export const formItemSlots: SlotItem[] = [{ name: "default", remark: "Form item content" }];
