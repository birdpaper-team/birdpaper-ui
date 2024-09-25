import _tooltip from "./src/tooltip.vue";

export const Tooltip = _tooltip;

export * from "./src/props";
// export * from "./src/types";

export type TooltipInstance = InstanceType<typeof Tooltip>;
export default Tooltip;
