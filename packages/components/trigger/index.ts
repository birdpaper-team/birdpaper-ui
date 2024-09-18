import _trigger from "./src/trigger.vue";

export const Trigger = _trigger;

export * from "./src/props";
export * from "./src/types";

export type TriggerInstance = InstanceType<typeof Trigger>;
export default Trigger;
