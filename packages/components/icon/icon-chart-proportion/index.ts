import type { App } from 'vue';
import _IconChartProportion from './icon-chart-proportion.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartProportion.name = getComponentsPrefix() + _IconChartProportion.name;

const IconChartProportion = Object.assign(_IconChartProportion, {
  install: (app: App) => {
    app.component(_IconChartProportion.name, _IconChartProportion);
  }
});

export default IconChartProportion;