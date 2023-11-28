import type { App } from 'vue';
import _IconChartPie from './icon-chart-pie.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartPie.name = getComponentsPrefix() + _IconChartPie.name;

const IconChartPie = Object.assign(_IconChartPie, {
  install: (app: App) => {
    app.component(_IconChartPie.name, _IconChartPie);
  }
});

export default IconChartPie;