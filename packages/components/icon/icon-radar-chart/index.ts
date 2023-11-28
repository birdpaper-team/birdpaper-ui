import type { App } from 'vue';
import _IconRadarChart from './icon-radar-chart.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconRadarChart.name = getComponentsPrefix() + _IconRadarChart.name;

const IconRadarChart = Object.assign(_IconRadarChart, {
  install: (app: App) => {
    app.component(_IconRadarChart.name, _IconRadarChart);
  }
});

export default IconRadarChart;