import _radio from "./src/radio.vue";
import _radioGroup from "./src/radioGroup";

export const Radio = _radio;
export const RadioGroup = _radioGroup;

export * from "./src/props";
export * from "./src/types";

export type RadioInstance = InstanceType<typeof Radio>;
export type RadioGroupInstance = InstanceType<typeof RadioGroup>;
export default Radio;
