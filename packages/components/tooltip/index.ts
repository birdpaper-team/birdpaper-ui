import { App } from "vue";
import { getComponentsPrefix } from "../../utils/config";
import tooltip from "./src/tooltip.vue";

tooltip.name = getComponentsPrefix() + tooltip.name;

const Tooltip = Object.assign(tooltip, {
  install: (app: App) => {
    app.component(tooltip.name, tooltip);
  },
});

export type TooltipInstance = InstanceType<typeof tooltip>;
export default Tooltip;
