import type { App } from 'vue';
import _IconAnalysis from './icon-analysis.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconAnalysis.name = getComponentsPrefix() + _IconAnalysis.name;

const IconAnalysis = Object.assign(_IconAnalysis, {
  install: (app: App) => {
    app.component(_IconAnalysis.name, _IconAnalysis);
  }
});

export default IconAnalysis;