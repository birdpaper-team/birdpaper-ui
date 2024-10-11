import _checkbox from "./src/checkbox.vue";
import _checkboxGroup from "./src/checkboxGroup";

export const Checkbox = _checkbox;
export const CheckboxGroup = _checkboxGroup;

export * from "./src/props";
export * from "./src/types";

export type CheckboxInstance = InstanceType<typeof Checkbox>;
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>;
export default Checkbox;
