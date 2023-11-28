import type { App } from 'vue';
import _IconChartHistogramTwo from './icon-chart-histogram-two.vue';
import { getComponentsPrefix } from "../../../utils/config";

_IconChartHistogramTwo.name = getComponentsPrefix() + _IconChartHistogramTwo.name;

const IconChartHistogramTwo = Object.assign(_IconChartHistogramTwo, {
  install: (app: App) => {
    app.component(_IconChartHistogramTwo.name, _IconChartHistogramTwo);
  }
});

export default IconChartHistogramTwo;