import _switch from "./src/switch.vue";

export const Switch = _switch;

export * from "./src/props";
export * from "./src/types";

export type SwitchInstance = InstanceType<typeof Switch>;
export default Switch;
