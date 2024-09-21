import _trigger from "./src/trigger";

export const Trigger = _trigger;

export * from "./src/types";

export type TriggerInstance = InstanceType<typeof Trigger>;
export default Trigger;
