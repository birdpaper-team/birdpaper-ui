import type { App } from 'vue';
import _IconPlan from './icon-plan.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlan.name = getComponentsPrefix() + _IconPlan.name;

const IconPlan = Object.assign(_IconPlan, {
  install: (app: App) => {
    app.component(_IconPlan.name, _IconPlan);
  }
});

export default IconPlan;