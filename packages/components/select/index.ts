import _select from "./src/select.vue";
import _option from "./src/components/option.vue";

export const Select = _select;
export const Option = _option;

export * from "./src/props";
export * from "./src/types";

export type SelectInstance = InstanceType<typeof Select>;
export type OptionInstance = InstanceType<typeof Option>;
export default Select;
