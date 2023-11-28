import type { App } from 'vue';
import _IconPlaneLine from './icon-plane-line.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconPlaneLine.name = getComponentsPrefix() + _IconPlaneLine.name;

const IconPlaneLine = Object.assign(_IconPlaneLine, {
  install: (app: App) => {
    app.component(_IconPlaneLine.name, _IconPlaneLine);
  }
});

export default IconPlaneLine;