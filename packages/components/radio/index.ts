import _radio from "./src/radio.vue";

export const Radio = _radio;

export * from "./src/props";
export * from "./src/types";

export type RadioInstance = InstanceType<typeof Radio>;
export default Radio;
