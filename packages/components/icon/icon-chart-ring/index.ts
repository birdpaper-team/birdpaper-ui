import type { App } from 'vue';
import _IconChartRing from './icon-chart-ring.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartRing.name = getComponentsPrefix() + _IconChartRing.name;

const IconChartRing = Object.assign(_IconChartRing, {
  install: (app: App) => {
    app.component(_IconChartRing.name, _IconChartRing);
  }
});

export default IconChartRing;